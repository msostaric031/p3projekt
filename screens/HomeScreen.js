import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export function HomeScreen({ route, navigation }) {
  function handleNavPress() {
    navigation.navigate("UserInfo");
  }
  return (
    <View style={styles.screen}>
      <Text>Home screen</Text>
      <Button onPress={handleNavPress} title="User info" />
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
