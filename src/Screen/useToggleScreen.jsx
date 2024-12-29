import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useToggle } from "../Hooks/useToggle";

export const UseToggleScreen = () => {
  const { toggle, ToggleValue, ShowValue, HideValue } = useToggle();
  return (
    <div>
      <Box height={"20vh"} width={"20vw"} bgcolor={"secandery"}>
        {toggle && <Typography>Value Toggled</Typography>}
      </Box>

      <Button onClick={ToggleValue}>Toggle</Button>
      <Button onClick={ShowValue}>Show Value</Button>
      <Button onClick={HideValue}>Hide Value</Button>
    </div>
  );
};
