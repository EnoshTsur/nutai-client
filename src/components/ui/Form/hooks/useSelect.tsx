import { useCallback, useMemo, useState } from "react";

interface useSelectProps {
  readonly options: ReadonlyArray<string>;
  readonly value: string | undefined;
}

const useSelect = ({ options, value }: useSelectProps) => {
  const [isFocused, setFocused] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen((pre) => !pre);
    setFocused(true);
  }, [setOpen, setFocused]);

  const handleBlur = useCallback(() => {
    if (value == null) {
      setFocused(false);
    }
    setOpen(false);
  }, [value, setOpen, setFocused]);

  const orderedOptions = useMemo(
    (): ReadonlyArray<string> =>
      value == null ? options : [value, ...options.filter((v) => v !== value)],
    [value, options]
  );

  return {
    isFocused,
    isOpen,
    orderedOptions,
    handleClick,
    handleBlur,
  };
};

export default useSelect;
