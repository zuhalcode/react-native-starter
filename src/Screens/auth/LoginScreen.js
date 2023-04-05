import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../../styles/globals";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button
        onPress={() => navigation.navigate("Signup")}
        title="Need an account?"
      />
    </View>
  );
}
