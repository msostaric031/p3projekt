import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import Task from "../components/Task";

export function HomeScreen({ route, navigation }) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  function handleNavPress() {
    navigation.navigate("UserInfo");
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      </View>

      <View style={styles.items}>
        {taskItems.map((item, index) => {
          return (
            <View key={index}>
              <Task text={item} />
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.delete}
                  title="Delete task"
                  onPress={() => completeTask()}
                >
                  <Text>Delete Task</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.edit}
                  title="Edit task"
                  onPress={() => console.log("pressed")}
                >
                  <Text>Edit Task</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
  delete: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  edit: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  },
  btnContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
