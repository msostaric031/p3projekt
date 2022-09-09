import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export function HomeScreen({ route, navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "black",
    width: 200,
    height: 200,
  },
});
