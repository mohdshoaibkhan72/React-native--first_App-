import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [entergoalText, setEntergoalText] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  function Inputgoalhandler(enterText) {
    setEntergoalText(enterText);
  }
  function adgoalhandler() {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      entergoalText,
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Welcome to the Home Page</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your goal"
          onChangeText={Inputgoalhandler}
        />
        <Button onPress={adgoalhandler} title="Add Goal" />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listHeading}>List of Goals</Text>
        {courseGoal.map((goal) => (
          <Text style={styles.listitems} key={goal}>
            {goal}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 50,
  },
  headingText: {
    color: "blue",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    padding: 10,
    marginBottom: 10,
  },
  listContainer: {
    margin: 20,
  },
  listHeading: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 8,
  },
  listitems: {
    padding: 5,
    fontSize: 20,
    fontWeight: "500",
    width: "auto",
    margin: 5,
    height: 40,
    backgroundColor: "#ccc",
    borderRadius: 6,
  },
});
