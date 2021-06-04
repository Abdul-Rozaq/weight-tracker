import React from "react";
import { StyleSheet, LogBox } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { auth } from "../config/firebase";
import Form from "../form/Form";
import FormField from "../form/FormField";
import SubmitButton from "../form/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

LogBox.ignoreLogs(["Setting a timer"]);
export default function RegisterScreen() {
  const handleRegister = ({ email, password, name }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ email: "", password: "", name: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleRegister(values)}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="name"
          placeholder="Name"
          icon="account"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "flex-end",
  },
});
