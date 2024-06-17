import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface useSelectProps {
  readonly options: ReadonlyArray<string>;
  readonly value: string | undefined;
  readonly onChange: (option: string) => void;
}

const useSelect = ({ options, value, onChange }: useSelectProps) => {
  const [isFocused, setFocused] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null)


  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current) {
      setOpen(true);
      setFocused(true);
    }
  }, [setOpen, setFocused]);

  const handleFocus = useCallback(() => {
    setFocused(true);
    if (!isOpen) {
      setOpen(true);
    }
  }, [setFocused, isOpen, setOpen]);

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

  const handleMouseEnter = useCallback(
    (index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(-1);
  }, [setActiveIndex]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (isFocused && !isOpen) {
        setOpen(true);
      }
      if (event.key === "ArrowDown") {
        if (activeIndex < options.length - 1) {
          setActiveIndex((pre) => pre + 1);
        }
      } else if (event.key === "ArrowUp") {
        if (activeIndex > 0) {
          setActiveIndex((pre) => pre - 1);
        }
      } else if (event.key === "Enter") {
        handleOptionSelection(orderedOptions[activeIndex]);
      }
    },
    [activeIndex, setActiveIndex, options]
  );

  const handleOptionSelection = useCallback(
    (option: string) => {
      debugger
      if (isOpen) {
        setOpen(false);
        onChange(option);
      }
    },
    [onChange, isOpen, orderedOptions, options, setOpen]
  );

  return {
    isFocused,
    isOpen,
    orderedOptions,
    activeIndex,
    containerRef,
    handleClick,
    handleBlur,
    handleFocus,
    handleKeyDown,
    handleMouseEnter,
    handleMouseLeave,
    handleOptionSelection,
  };
};

export default useSelect;
