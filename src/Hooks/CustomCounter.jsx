import React, { useState } from "react";

export const useCustomCounter = (Value) => {
  const [counter, setCounter] = useState(Value);

  const Increament = () => {
    setCounter(counter + 1);
  };

  const Decreament = () => {
    setCounter(counter - 1);
  };

  const Reset = () => {
    setCounter(0);
  };

  const AddValueByNum = (val) => {
    setCounter(counter + val);
  };

  return { counter, Increament, Decreament, Reset, AddValueByNum };
};
