import { useState, useRef, useCallback, useMemo } from "react";
import { InputProps } from "../Input/Input";

const useInput = ({ value, type, error, success }: InputProps) => {
  const [isFocused, setFocused] = useState(false);
  const [inputType, setInputType] = useState(type ?? "text");
  const ref = useRef<HTMLInputElement>(null);

  const handleShowPasswordClick = useCallback(() => {
    setInputType((pre) => (pre === "password" ? "text" : "password"));
  }, [setInputType]);

  const showPasswordColor = useMemo(() => {
    return error !== ""
      ? "#dd1a39"
      : success
      ? "#13bc2c"
      : isFocused
      ? "white"
      : "#b436b4";
  }, [error, success, isFocused]);

  const handleFocus = useCallback(() => {
    setFocused(true);
    if (ref.current != null) {
      ref.current.focus();
    }
  }, []);

  const handleBlur = useCallback(() => {
    if (value == null || value === "") {
      setFocused(false);
    }
  }, [setFocused, value]);

  return {
    isFocused,
    ref,
    handleFocus,
    handleBlur,
    inputType,
    handleShowPasswordClick,
    showPasswordColor,
  };
};

export default useInput;
