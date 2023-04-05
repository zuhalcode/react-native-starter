import { Text } from "react-native";
import { Button } from "react-native";
import { View } from "react-native";
import styles from "../../styles/globals";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title="Logout" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
