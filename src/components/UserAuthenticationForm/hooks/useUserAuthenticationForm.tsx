import useForm from "../../ui/Form/hooks/useForm";

const useUserAuthentication = () => {
  const { formState, handleChange } = useForm({
    email: {
      name: "email",
      value: "",
      success: false,
    },
    password: {
      name: "password",
      value: "",
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

  return {
    handleEmailChange,
    handlePasswordChange,
    formState,
  };
};

export default useUserAuthentication;
