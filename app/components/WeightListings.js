import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { db } from "../config/firebase";
import routes from "../navigation/routes";
import AppHeaderText from "./AppHeaderText";
import Weight from "./Weight";

export default function WeightListings({ onPress }) {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("weights")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        setWeights(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {weights.length > 0 ? (
        <FlatList
          data={weights}
          keyExtractor={(weight) => weight.id.toString()}
          renderItem={({ item }) => (
            <Weight
              weight={item?.data?.weight}
              date={item?.data?.createdAt.toDate().toLocaleString()}
              onPress={() => onPress(item)}
            />
          )}
        />
      ) : (
        <AppHeaderText>Click the button below to add weight</AppHeaderText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    maxHeight: "65%",
  },
});
