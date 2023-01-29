import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

import { horizontalScale, moderateScale, verticalScale } from "../Metrics";

import { wisdom } from "./wisdom_words";

export default function DoItem() {
  const [task, setTask] = useState("");

  return (
    <View>
      <TextInput
        style={styles.textBox}
        onChangeText={(task) => setTask(task)}
        placeholder={wisdom[Math.floor(Math.random() * wisdom.length)]}
        keyboardType="default"
      />

      <Image style={styles.line} source={require("../assets/line.png")} />

      <Image style={styles.circle} source={require("../assets/circle.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 25,
    height: 25,
    bottom: 70,
  },
  plusCircle: {
    width: 25,
    height: 25,
    top: -25,
    left: 300,
  },
  line: {
    bottom: verticalScale(40),
    right: horizontalScale(7),
  },
  textBox: {
    height: 40,
    width: 270,
    bottom: 37,
    left: 29,
    fontSize: 10,
  },
});
