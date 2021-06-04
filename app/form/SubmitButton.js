import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../components/AppButton";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}
