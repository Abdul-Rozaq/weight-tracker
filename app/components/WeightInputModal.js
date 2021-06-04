import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { db } from "../config/firebase";
import AppButton from "./AppButton";
import AppHeaderText from "./AppHeaderText";
import AppText from "./AppText";
import WeightForm from "./WeightForm";

export default function WeightInputModal({
  modalVisible,
  setModalVisible,
  item,
  setWeight,
}) {
  const handleCancel = () => {
    setWeight(null);
    setModalVisible(false);
  };

  const handleDelete = (id) => {
    db.collection("weights")
      .doc(id)
      .delete()
      .then(() => setModalVisible(false))
      .catch((err) => {});
  };

  return (
    <View style={[styles.centeredView]}>
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {!item?.data?.weight && (
              <AppHeaderText style={styles.modalText}>
                What's your weight today?
              </AppHeaderText>
            )}

            {item?.data?.weight && (
              <>
                <AppHeaderText style={styles.modalText}>
                  your weight: {item?.data?.weight}
                </AppHeaderText>
                <AppText>
                  on {item?.data?.createdAt.toDate().toLocaleString()}
                </AppText>
                <View style={{ height: 40 }} />
              </>
            )}

            <WeightForm setModalVisible={setModalVisible} item={item} />

            {item?.data?.weight && (
              <AppButton title="Delete" onPress={() => handleDelete(item.id)} />
            )}

            <AppButton title="Cancel" onPress={handleCancel} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "80%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
