import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { UserInfoSceen } from "../screens/UserInfoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="UserInfo"
          component={UserInfoSceen}
          options={{ title: "Info Screen" }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Today's Tasks" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
