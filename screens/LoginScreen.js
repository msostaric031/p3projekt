import React, { useState } from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Google from "expo-google-app-auth";
import Ionicons from "@expo/vector-icons/Ionicons";

export function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const handleGoogleSignIn = () => {
    setLoading(true);
    const config = {
      iosClientId:
        "608924630924-37cv4o1pg812fa42a04ev4h7ppe6iii4.apps.googleusercontent.com",
      androidClientId:
        "608924630924-2al2brd2if6m7qj1vm4v5jbmcqab472b.apps.googleusercontent.com",
      expoClientId:
        "608924630924-f0jeg4heeid44ksa84fsqcimc90asl1v.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == "success") {
          const { email, name, photoUrl } = user;
          alert(`User ${user.name} is logged in.`);
          console.log("Signin successfull");
          navigation.navigate("Activities", { email, name, photoUrl }), 1000;
        } else {
          alert("Siging not successfull");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.titleWrapper, styles.shadow]}>
        <Text style={styles.title}>What ToDo?</Text>
      </View>

      <View style={styles.buttonContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <TouchableOpacity
            style={[styles.loginBtn, styles.shadow]}
            onPress={handleGoogleSignIn}
          >
            <Ionicons
              name="logo-google"
              size={40}
              style={styles.logo}
              color={"#4F6367"}
            />
            <Text style={styles.btnText}>Google Sign in</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7A9E9F",
  },
  button: {
    color: "black",
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 40,
  },
  titleWrapper: {
    backgroundColor: "#EEF5DB",
    borderRadius: 40,
    marginBottom: 300,
  },
  loginBtn: {
    backgroundColor: "#EEF5DB",
    borderRadius: 60,
    flexDirection: "row",
  },
  btnText: {
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  logo: {
    top: 10,
    paddingLeft: 10,
  },
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 1,
    elevation: 8,
  },
});
