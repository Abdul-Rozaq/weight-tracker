import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ShowModalButton({ setModalVisible }) {
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={styles.button}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
    alignSelf: "flex-end",
    marginBottom: 20,
    marginRight: 20,
  },
});
