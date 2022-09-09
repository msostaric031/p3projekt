import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import * as Google from "expo-google-app-auth";

export function WineCatalogue({ route, navigation }) {
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
