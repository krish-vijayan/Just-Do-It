import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import axios from "axios";
import React, { useState } from "react";

import { horizontalScale, moderateScale, verticalScale } from "../Metrics";

import DoItem from "./Item";

export default function Create({ navigation }) {
  const [todos, setTodos] = useState([<DoItem />]);
  const [numTasks, setNumTasks] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Tasks for Toda"
          style={styles.title}
          maxLength={15}
        ></TextInput>
        <Text style={styles.numTasks}>Number of Tasks: {numTasks}</Text>

        <TouchableOpacity
          onPress={() => {
            if (todos.length > 15) {
              Alert.alert(
                "Maximum amount of Tasks Reached!",
                "Who do you think you are Elon Musk?"
              );
            } else {
              setTodos((todos) => [...todos, <DoItem />]);
              console.log("Task Added");
              setNumTasks(todos.length);
            }
          }}
        >
          <Image style={styles.add} source={require("../assets/add.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNumTasks(numTasks - 1);
            setTodos((todos) => todos.filter((_, index) => index !== 0));
          }}
        >
          <Image style={styles.minus} source={require("../assets/minus.png")} />
        </TouchableOpacity>
        <ScrollView style={styles.todo}>{todos}</ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top: verticalScale(70),
    marginBottom: 10,
  },
  title: {
    fontSize: 50,
    maxWidth: 700,
  },

  add: {
    width: 70,
    height: 70,
    top: 460,
    left: horizontalScale(140),
  },
  minus: {
    width: 70,
    height: 70,
    top: 390,
    right: horizontalScale(140),
  },
  todo: {
    maxHeight: 400,
    bottom: 100,
  },
});
