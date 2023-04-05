import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./DashboardStyle";

import {
  ACCENT_COLOR,
  NEUTRAL_COLOR,
  PRIMARY_COLOR,
} from "../../../utils/constants/colors";

import Card from "../../../components/Card";
import List from "../../../components/List";

export default function DashboardScreen({ navigation }) {
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
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: 105,
            }}
          >
            <MaterialIcons
              name="location-pin"
              size={24}
              color={PRIMARY_COLOR}
            />
            <Text style={{ textTransform: "capitalize", color: NEUTRAL_COLOR }}>
              new zealand
            </Text>
          </View>
        </View>

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
            }}
          >
            Find good
          </Text>
          <Text
            style={{
              color: NEUTRAL_COLOR,
              fontSize: 36,
              fontWeight: "bold",
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
}
