import { StatusBar } from "expo-status-bar";
import React from "react";
import { TabNavigator } from "./navigation/navigator";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return <TabNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
