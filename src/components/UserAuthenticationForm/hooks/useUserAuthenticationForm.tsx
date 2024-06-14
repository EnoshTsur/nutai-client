import { InputField } from "../../ui/Form/types";
import useForm from "../../ui/Form/hooks/useForm";

const useUserAuthentication = () => {
  const { formState, handleChange } = useForm({
    email: {
      name: "email",
      value: undefined,
      success: false,
    },
    password: {
      name: "password",
      value: undefined,
      success: false,
    },
  });

  const handleEmailChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name,
      value,
      errorHandler: (value) => {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(`${value}`)
          ? `${value} is not a valid email`
          : undefined;
      },
    });
  };

  const handlePasswordChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name,
      value,
      errorHandler: (value) => {
        return `${value}`.length < 3
          ? "Password's length should be greater then 3 characters"
          : undefined;
      },
    });
  };

  const emailInputField: InputField = {
    formType: "input",
    inputType: "email",
    value: formState.email.value,
    errorMessage: formState.email.errorMessage,
    success: formState.email.success,
    label: "Email",
    name: formState.email.name,
    onChange: handleEmailChange,
  };

  const passwordInputFeild: InputField = {
    formType: "input",
    inputType: "password",
    value: formState.password.value,
    errorMessage: formState.password.errorMessage,
    success: formState.password.success,
    label: "Password",
    name: formState.password.name,
    onChange: handlePasswordChange,
  };

  return {
    formFields: [emailInputField, passwordInputFeild],
    formState,
  };
};

export default useUserAuthentication;
