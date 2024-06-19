import { useState } from "react";

interface FormFieldState {
  readonly name: FormStateKey;
  readonly value: string;
  readonly success: boolean;
  readonly errorMessage?: string | undefined;
}

type FormState = Readonly<Record<string, FormFieldState>>;

type FormStateKey = keyof FormState;

interface ChangeHandler {
  readonly name: FormStateKey;
  readonly value: string;
  readonly errorHandler?: (value: string | number) => string | undefined;
}

const useForm = (initialValue: FormState) => {
  const [formState, setFormState] = useState(initialValue);

  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = ({ name, value, errorHandler }: ChangeHandler) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    setFormState((pre) => ({ ...pre, [name]: { ...pre[name], value } }));

    const newTimerId = setTimeout(() => {
      const errorMessage = errorHandler ? errorHandler(value) : undefined;
      const success = !errorMessage && value !== "";
      setFormState((pre) => ({
        ...pre,
        [name]: { ...pre[name], errorMessage, success },
      }));
    }, 1000);

    setTimerId(newTimerId);
  };

  return {
    formState,
    handleChange,
  };
};

export default useForm;
