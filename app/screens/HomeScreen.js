import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import ShowModalButton from "../components/ShowModalButton";
import WeightInputModal from "../components/WeightInputModal";
import WeightListings from "../components/WeightListings";
import colors from "../config/colors";
import { auth } from "../config/firebase";
import styles from "../config/styles";
import routes from "../navigation/routes";
import AppText from "../components/AppText";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [weight, setWeight] = useState(null);

  const signOutUser = () => {
    auth.signOut().then(() => navigation.replace(routes.LOGIN));
  };

  const handleEdit = (item) => {
    // console.log(item);
    setWeight(item);
    setModalVisible(true);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Weights",
      headerStyle: { backgroundColor: colors.primary },
      headerTitleStyle: { color: colors.white },
      headerRight: () => (
        <View style={{ marginRight: 15 }}>
          <TouchableOpacity
            onPress={signOutUser}
            activeOpacity={0.5}
            style={{ marginRight: 20, alignItems: "center" }}
          >
            <MaterialCommunityIcons
              name="logout-variant"
              size={20}
              color={colors.white}
            />
            <AppText style={{ color: colors.white }}>Logout</AppText>
          </TouchableOpacity>
        </View>
      ),
    });
    return () => {};
  }, []);

  return (
    <Screen style={styles.container}>
      <WeightListings onPress={(item) => handleEdit(item)} />
      <WeightInputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={weight}
        setWeight={setWeight}
      />

      <ShowModalButton setModalVisible={setModalVisible} />
    </Screen>
  );
}
