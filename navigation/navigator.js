import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { WineCatalogue } from "../screens/WineCatalogue";
import { UserInfoSceen } from "../screens/UserInfoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserInfo"
          component={UserInfoSceen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="WineCatalogue" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "WineCatalogue") {
              iconName = focused ? "wine" : "wine-outline";
            } else if (route.name === "UserInfo") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "darkred",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: "Login",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              paddingBottom: 5,
              color: "white",
            },
            headerStyle: {
              backgroundColor: "darkred",
              shadowColor: "transparent",
              height: 120,
            },
            title: "LOGIN",
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
        <Tab.Screen
          name="UserInfo"
          component={UserInfoSceen}
          options={{
            headerTitle: "USER INFO",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              paddingBottom: 5,
              color: "white",
            },
            headerStyle: {
              backgroundColor: "darkred",
              shadowColor: "transparent",
              height: 120,
            },
            title: "USER INFO",
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />

        <Tab.Screen
          name="WineCatalogue"
          component={WineCatalogue}
          options={{
            headerTitle: "Wine Catalogue",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              paddingBottom: 5,
              color: "white",
            },
            headerStyle: {
              backgroundColor: "darkred",
              shadowColor: "transparent",
              height: 120,
            },
            title: "WINE CATALOGUE",
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
