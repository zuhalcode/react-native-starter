import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "./src/Drawer/profile/ProfileScreen";
import ChatScreen from "./src/Drawer/chat/ChatScreen";
import LoginScreen from "./src/Screens/auth/LoginScreen";
import RegisterScreen from "./src/Screens/auth/RegisterScreen";
import DashboardScreen from "./src/Screens/dashboard";

import { ACCENT_COLOR, PRIMARY_COLOR } from "./utils/constants/colors";
import SettingScreen from "./src/Drawer/setting/SettingScreen";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

function Drawer() {
  return (
    <DrawerNav.Navigator
      screenOptions={{
        headerTintColor: PRIMARY_COLOR,
        headerStyle: {
          backgroundColor: ACCENT_COLOR,
          borderBottomWidth: 0,
          elevation: 0,
        },
      }}
    >
      <DrawerNav.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          headerTitleStyle: { marginTop: 0 },
          headerTitleContainerStyle: { paddingTop: 0 },
        }}
      />
      <DrawerNav.Screen name="Profile" component={ProfileScreen} />
      <DrawerNav.Screen name="Chat" component={ChatScreen} />
    </DrawerNav.Navigator>
  );
}

function Tab() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Dashboard"
        component={Drawer}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-settings" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
