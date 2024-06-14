import { useState, useRef, useCallback } from "react";

type valueType = string | number | readonly string[] | undefined;

interface useInputProps {
    readonly value: valueType
}

const useInput = ({ value }: useInputProps) => {
  const [isFocused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleFocus = useCallback(() => {
    setFocused(true);
    if (ref.current != null) {
      ref.current.focus();
    }
  }, [ref.current]);

  const handleBlur = useCallback(() => {
    if (value == null || value == "") {
      setFocused(false);
    }
  }, [setFocused, value]);

  return {
    isFocused,
    ref,
    handleFocus,
    handleBlur,
  };
};

export default useInput;
