import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Task from "../components/Task";

export function HomeScreen({ route, navigation }) {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();

  function handleNavPress() {
    navigation.navigate("Activities");
  }

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

  const handleEdit = (i) => {
    setTask(taskItems[i]);
    setShow(true);
    setEditIndex(i);
  };

  const handleUpdate = () => {
    taskItems.splice(editIndex, 1, task);
    setTaskItems([...taskItems]);
    setShow(false);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <TouchableOpacity style={styles.navButton} onPress={handleNavPress}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            To activity page
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        <Text style={styles.sectionTitle}>Today's tasks:</Text>
        <ScrollView>
          {taskItems.map((item, index) => {
            return (
              <View key={index} style={styles.taskCard}>
                <Task text={item} />
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    style={styles.delete}
                    title="Delete task"
                    onPress={() => completeTask(index)}
                  >
                    <Text>Delete Task</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.edit}
                    title="Edit task"
                    onPress={() =>
                      handleEdit(index) ||
                      alert("Edit the selected task in the text input field")
                    }
                  >
                    <Text>Edit Task</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={[styles.input, styles.shadow]}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        {!show ? (
          <TouchableOpacity
            onPress={
              !task
                ? () => alert("Enter the title of the task first")
                : () => handleAddTask()
            }
          >
            <View style={[styles.addWrapper, styles.shadow]}>
              <Text style={styles.addText}>Add</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={
              task === taskItems || !task
                ? () => setShow(false) || setTask("")
                : () => handleUpdate()
            }
          >
            <View style={[styles.addWrapper, styles.shadow]}>
              <Text style={styles.addText}>Edit</Text>
            </View>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7A9E9F",
    height: 800,
  },
  taskCard: { marginBottom: 15 },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 30,
    color: "#374548",
  },
  items: {
    position: "relative",
    marginTop: 30,
    height: "100%",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#EEF5DB",
    borderRadius: 60,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#EEF5DB",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
  delete: {
    backgroundColor: "#FE5F55",
    padding: 10,
    borderRadius: 10,
  },
  edit: {
    backgroundColor: "#B8D8D8",
    padding: 10,
    borderRadius: 10,
  },
  btnContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navButton: {
    maxWidth: 160,
    height: 60,
    backgroundColor: "#4F6367",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 1,
    elevation: 5,
  },
});
