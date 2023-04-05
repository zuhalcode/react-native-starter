import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import {
  ACCENT_COLOR,
  NEUTRAL_COLOR,
  PRIMARY_COLOR,
} from "../../../constants/colors";
import Card from "../components/Card";
import styles from "./HomeStyle";
import axios from "axios";
import List from "../components/List";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api-ruesto.netlify.app/api/products`
      );
      setProducts(data.data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: ACCENT_COLOR }}>
      <StatusBar style="light" />

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: 105,
          }}
        >
          <MaterialIcons name="location-pin" size={24} color={PRIMARY_COLOR} />
          <Text style={{ textTransform: "capitalize", color: NEUTRAL_COLOR }}>
            new zealand
          </Text>
        </View>
        <Feather name="menu" size={24} color={PRIMARY_COLOR} />
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 50 }}
      >
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              color: NEUTRAL_COLOR,
              fontSize: 36,
              fontWeight: "bold",
              color: NEUTRAL_COLOR,
            }}
          >
            Find good
          </Text>
          <Text
            style={{
              color: NEUTRAL_COLOR,
              fontSize: 36,
              fontWeight: "bold",
              color: NEUTRAL_COLOR,
            }}
          >
            Food around you
          </Text>
        </View>

        <View style={{ padding: 10 }}>
          <View style={styles.search}>
            <Ionicons name="search-outline" size={24} color="black" />
            <Text>Search your fav food</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{ color: NEUTRAL_COLOR, fontSize: 18, fontWeight: "bold" }}
          >
            Popular Items
          </Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ padding: 10, flexDirection: "row", gap: 5 }}>
            {products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{ color: NEUTRAL_COLOR, fontSize: 18, fontWeight: "bold" }}
          >
            Delicious Items
          </Text>

          <Text
            style={{ color: PRIMARY_COLOR, fontSize: 16, fontWeight: "500" }}
          >
            See All
          </Text>
        </View>

        <View style={{ padding: 10, gap: 5, justifyContent: "center" }}>
          {products.map((product) => (
            <List product={product} key={product._id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
