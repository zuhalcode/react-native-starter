import { Image } from "react-native";
import {
  ACCENT_COLOR,
  NEUTRAL_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../constants/colors";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { toRupiah } from "../libs/textFunction";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const List = ({ product }) => {
  return (
    <View style={styles.listContainer}>
      <Image
        source={{
          uri: `https://api-ruesto.netlify.app/${product.image}`,
        }}
        resizeMode="contain"
        style={{ width: 80, height: 80, borderRadius: 100 }}
      />
      <View
        style={{
          gap: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 200,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {product.name}
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </View>
        <Text
          style={{ color: SECONDARY_COLOR, fontWeight: "bold", fontSize: 15 }}
        >
          No.1 in Sales
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {toRupiah(product.price)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: (width * 90) / 100,
    height: width / 3,
    backgroundColor: NEUTRAL_COLOR,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});

export default List;
