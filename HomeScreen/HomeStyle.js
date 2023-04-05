import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { ACCENT_COLOR, NEUTRAL_COLOR } from "../../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  search: {
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    gap: 5,
    backgroundColor: NEUTRAL_COLOR,
    padding: 10,
    alignItems: "center",
  },
  
  cardContainer: {
    width: (width * 70) / 100,
    height: (width * 90) / 100,
    backgroundColor: NEUTRAL_COLOR,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default styles;
