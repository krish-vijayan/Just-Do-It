import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import axios from "axios";
import React, { useState, useEffect } from "react";

import { horizontalScale, moderateScale, verticalScale } from "../Metrics";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Just Do - It</Text>
      <Image source={require("../assets/checkmark.png")} />
      <Pressable
        onPress={() => {
          console.log("Create Do - Its");
          navigation.navigate("Create");
        }}
      >
        <Image
          style={styles.createButton}
          source={require("../assets/create-do-its.png")}
        />
      </Pressable>
      <Pressable onPress={() => console.log("View Do - Its")}>
        <Image source={require("../assets/view-do-its.png")} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top: verticalScale(100),
  },
  createButton: {
    margin: 20,
  },
  title: {
    fontSize: 70,
  },
});
