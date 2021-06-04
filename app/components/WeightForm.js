import React from "react";
import * as Yup from "yup";
import { db, Timestamp } from "../config/firebase";

import Form from "../form/Form";
import FormField from "../form/FormField";
import SubmitButton from "../form/SubmitButton";

const validationSchema = Yup.object().shape({
  weight: Yup.number().required().label("Weight"),
});

export default function WeightForm({ setModalVisible, item }) {
  const handleSubmitWeight = ({ weight }) => {
    if (item?.data?.weight) {
      db.collection("weights")
        .doc(item.id)
        .set({
          weight,
          createdAt: Timestamp.now(),
        })
        .then(() => setModalVisible(false))
        .catch((err) => {});
      return;
    }

    db.collection("weights")
      .add({
        weight,
        createdAt: Timestamp.now(),
      })
      .then(() => {
        setModalVisible(false);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Form
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmitWeight(values)}
      initialValues={{ weight: "" }}
    >
      <FormField
        name="weight"
        placeholder="Enter weight in pounds"
        keyboardType="numeric"
      />

      <SubmitButton
        title={item?.data?.weight ? "Update weight" : "Add weight"}
      />
    </Form>
  );
}
