import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export function UserInfoSceen({ route, navigation }) {
  function handleNavPress() {
    navigation.navigate("HomeScreen");
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>User Info</Text>
      <Text>Email:</Text>
      <Text>Name:</Text>
      <Button onPress={handleNavPress} title="home screen" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
