import { Button, Typography } from "@mui/material";
import React from "react";
import { useCustomCounter } from "../Hooks/CustomCounter";

export const CounterCustomHookScreen = () => {
  const { counter, Increament, Decreament, Reset, AddValueByNum } =
    useCustomCounter(0);
  return (
    <>
      <Typography>{counter}</Typography>
      <Button onClick={Increament}>Increament</Button>
      <Button onClick={Decreament}>Decreament</Button>
      <Button onClick={Reset}>Reset</Button>
      <Button onClick={() => AddValueByNum(5)}>Add Value By Number</Button>
    </>
  );
};
