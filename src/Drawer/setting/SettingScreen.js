import { View, Text } from "react-native";
import styles from "../../../styles/globals";
import { Button } from "react-native";

export default function SettingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
      <Button onPress={() => navigation.navigate("Login")} title="Logout" />
    </View>
  );
}
