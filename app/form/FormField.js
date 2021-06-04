import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function FormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <React.Fragment>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}
