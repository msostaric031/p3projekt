import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export function Activities({ route, navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleNavPress() {
    navigation.navigate("HomeScreen");
  }
  function handleLogout() {
    navigation.navigate("Login");
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
    <View style={styles.screen}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.navButtonOut, styles.shadow]}
          onPress={handleLogout}
        >
          <Text style={styles.btnText}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, styles.shadow]}
          onPress={handleNavPress}
        >
          <Text style={[styles.btnText, { color: "white" }]}>
            Create some todos
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, styles.shadow]}>
        Feeling uninspired? Get some activity ideas:
      </Text>
      <ScrollView style={styles.todoContainer}>
        {loading ? (
          <Text>Loading ...</Text>
        ) : (
          data.todos.map((post) => (
            <View key={post.id} style={styles.card}>
              <Text style={styles.todo}>{post.todo}</Text>
            </View>
          ))
        )}
      </ScrollView>
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
  title: {
    alignSelf: "stretch",
    borderRadius: 60,
    marginRight: 10,
    marginLeft: 10,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 50,
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#EEF5DB",
    padding: 20,
  },
  todo: {
    fontSize: 15,
    textAlign: "center",
    padding: 10,
  },
  card: {
    backgroundColor: "#EEF5DB",
    width: 300,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  navButton: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "#4F6367",
  },
  navButtonOut: {
    height: 60,
    backgroundColor: "#FE5F55",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  btnText: {
    padding: 15,
    fontWeight: "bold",
  },
  btnContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 1,
    elevation: 8,
  },
  todoContainer: {
    backgroundColor: "#4F6367",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
});
