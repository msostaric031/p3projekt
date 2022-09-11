import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";

export function UserInfoSceen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleNavPress() {
    navigation.navigate("HomeScreen");
  }
  const url = "https://dummyjson.com/todos";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Button title="home screen" onPress={handleNavPress} />
        {loading ? (
          <Text>Loading ...</Text>
        ) : (
          data.map((post) => (
            <View key={post.id}>
              <Text>{post.todo}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
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
