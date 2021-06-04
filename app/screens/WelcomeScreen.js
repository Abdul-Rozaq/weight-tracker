import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppHeaderText from "../components/AppHeaderText";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import { auth } from "../config/firebase";

export default function WelcomeScreen({ navigation }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace(routes.HOME);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={styles.headerContainer}>
        <AppHeaderText>WEIGHTY</AppHeaderText>
        <AppText>A simple weight tracker</AppText>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  headerContainer: {
    position: "absolute",
    top: "30%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
