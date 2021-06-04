import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppHeaderText from "./AppHeaderText";
import AppText from "./AppText";

export default function Weight({ weight, date, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <AppHeaderText style={styles.header}>{weight}</AppHeaderText>
        <AppText style={styles.text}>{date}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.light,
  },
  header: {
    color: colors.primary,
  },
  text: {
    color: colors.grey,
  },
});
