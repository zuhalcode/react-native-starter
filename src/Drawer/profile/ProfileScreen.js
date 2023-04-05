import { View } from "react-native";
import styles from "../../../styles/globals";
import { Text } from "react-native";
import { Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Button
        onPress={() => navigation.navigate("Signup")}
        title="Need an account?"
      />
    </View>
  );
}
