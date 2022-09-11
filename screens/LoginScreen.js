import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import * as Google from "expo-google-app-auth";

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
          navigation.navigate("UserInfo", { email, name, photoUrl }), 1000;
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
      <View style={styles.buttonContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <Button
            title="Google SignIn"
            onPress={handleGoogleSignIn}
            style={styles.button}
            disabled={loading}
          />
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
  },

  button: {
    color: "black",
    width: 200,
    height: 200,
  },
});
