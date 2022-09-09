import React from "react";
import { View, Button, StyleSheet } from "react-native";
import * as Google from "expo-google-app-auth";

export function LoginScreen({ navigation }) {
  const handleGoogleSignIn = () => {
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
          console.log("Signin successfull");
          setTimeout(
            () => navigation.navigate("UserInfo", { email, name, photoUrl }),
            1000
          );
        } else {
          console.log("Siging not successfull");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button
          title="Google SignIn"
          onPress={handleGoogleSignIn}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#1ecbe1",
  },
  button: {
    color: "black",
    width: 200,
    height: 200,
  },
});
