import React from "react";
import { FilterInput } from "../FilterInput";

const BaseInput = ({ value, defaultValue, onChange, placeholder }) => {
  return (
    <FilterInput
      type="text"
      value={value}
      onChange={onChange}
      style={{ fontSize: 14 }}
      placeholder={placeholder}
    />
  );
};

export const StringFilter = [
  {
    key: "contains",
    label: "contains",
    valueType: "single",
    input: (props) => <BaseInput {...props} />,
  },
  {
    key: "not_contains",
    label: "not contains",
    valueType: "single",
    input: (props) => <BaseInput {...props} />,
  },
  {
    key: "equal",
    label: "equal",
    valueType: "single",
    input: (props) => <BaseInput {...props} />,
  },
  {
    key: "not_equal",
    label: "not equal",
    valueType: "single",
    input: (props) => <BaseInput {...props} />,
  },
];
