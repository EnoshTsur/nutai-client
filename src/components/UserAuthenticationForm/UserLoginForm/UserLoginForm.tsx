import { useQuery } from "react-query";
import api from "../../../api/api";
import Button from "../../ui/Button/Button";
import useUserAuthenticationForm from "../hooks/useUserAuthenticationForm";
import Input from "../../ui/Form/Input/Input";
import FormContainer from "../../ui/Form/FormContainer";


const fetchToken = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("auth/users/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const UserLoginForm = () => {
  const {
    formState: { email, password },
    handleEmailChange,
    handlePasswordChange,
  } = useUserAuthenticationForm();

  const { refetch } = useQuery(["user-login"], {
    queryFn: () =>
      fetchToken({ email: email.value!, password: password.value! }),
    enabled: false,
    onSuccess: ({ token }) => {
      localStorage.setItem("token", token);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleSubmit = () => {
    refetch();
  };

  return (
    <FormContainer>
      <Input
        name="email"
        type="email"
        value={email.value}
        onChange={handleEmailChange}
        placeholder="Email"
        error={email.errorMessage}
        success={email.success}
      />
      <Input
        name="password"
        type="password"
        value={password.value}
        onChange={handlePasswordChange}
        placeholder="Password"
        error={password.errorMessage}
        success={password.success}
      />
      <Button disabled={false} onClick={handleSubmit}>
        Sign
      </Button>
    </FormContainer>
  );
};

export default UserLoginForm;
