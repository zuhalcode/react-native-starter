import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../../styles/globals";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register Page</Text>
      <Button
        onPress={() => navigation.navigate("Tab")}
        title="Need To Login?"
      />
    </View>
  );
}
