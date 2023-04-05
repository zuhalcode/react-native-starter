import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../src/Screens/DashboardScreen";
import ProfileScreen from "../src/Screens/drawer/ProfileScreen";
import ChatScreen from "../src/Screens/drawer/ChatScreen";
import SettingScreen from "../src/Screens/drawer/SettingScreen";
import LoginScreen from "../src/Screens/auth/LoginScreen";
import RegisterScreen from "../src/Screens/auth/RegisterScreen";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="Home" component={DashboardScreen} />
      <DrawerNav.Screen name="Profile" component={ProfileScreen} />
      <DrawerNav.Screen name="Chat" component={ChatScreen} />
    </DrawerNav.Navigator>
  );
}

function Tab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Dashboard"
        component={Drawer}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen name="Setting" component={SettingScreen} />
    </BottomTab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
