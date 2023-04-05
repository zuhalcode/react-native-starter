import { Image, View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { toRupiah } from "../utils/helpers/textHelper";
import { ACCENT_COLOR, NEUTRAL_COLOR } from "../utils/constants/colors";

const { width } = Dimensions.get("window");

const Card = ({ product }) => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          gap: 5,
          width: 200,
          height: 200,
          borderRadius: 100,
        }}
      >
        <Image
          source={{
            uri: `https://api-ruesto.netlify.app/${product.image}`,
          }}
          resizeMode="contain"
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />

        <Text
          style={{
            textTransform: "capitalize",
            color: ACCENT_COLOR,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {product.name}
        </Text>

        <Text
          style={{
            textTransform: "capitalize",
            color: ACCENT_COLOR,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {toRupiah(product.price)}
        </Text>

        <View
          style={{
            flexDirection: "row",
            padding: 8,
            gap: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: ACCENT_COLOR,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: NEUTRAL_COLOR,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Add to Cart
            </Text>
          </View>
          <View>
            <Ionicons
              name="heart-outline"
              size={26}
              color={ACCENT_COLOR}
              style={{ textAlign: "right" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: (width * 70) / 100,
    height: (width * 90) / 100,
    backgroundColor: NEUTRAL_COLOR,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Card;
