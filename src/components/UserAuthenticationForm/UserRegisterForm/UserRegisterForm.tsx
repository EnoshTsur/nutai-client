import { useQuery } from "react-query";
import userDetailsApi from "../../../api/userDetailsApi";
import Button from "../../ui/Button/Button";
import useUserAuthentication from "../hooks/useUserAuthenticationForm";
import Input from "../../ui/Form/Input/Input";
import FormContainer from "../../ui/Form/FormContainer";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes/AppRoutes";

const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await userDetailsApi.post("auth/users/register", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const UserRegister = () => {

  const navigate = useNavigate()

  const { dashboard } = routes

  const {
    formState: { email, password },
    handleEmailChange,
    handlePasswordChange,
  } = useUserAuthentication();

  const { refetch } = useQuery(["user-register"], {
    queryFn: () =>
      registerUser({
        email: email.value ?? "",
        password: password.value ?? "",
      }),
    enabled: false,
    onSuccess: (response) => {
      console.log('register success', { response });
      localStorage.setItem("token", response.body);
      navigate(dashboard.path)
    },
    onError: (e) => {
      console.log('register failure', e);
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

export default UserRegister;
