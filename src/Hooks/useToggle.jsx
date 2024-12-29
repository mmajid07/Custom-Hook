import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  const ToggleValue = () => {
    setToggle(!toggle);
  };

  const ShowValue = () => {
    setToggle(true);
  };

  const HideValue = () => {
    setToggle(false);
  };

  return { toggle, ToggleValue, ShowValue, HideValue };
};
