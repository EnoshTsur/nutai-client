import { useQuery } from "react-query";
import api from "../../../api/api";
import Button from "../../ui/Button/Button";
import Card from "../../ui/Card/Card";
import Form from "../../ui/Form/Form";
import useUserAuthenticationForm from "../hooks/useUserAuthenticationForm";

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
    formFields,
    formState: { email, password },
  } = useUserAuthenticationForm();

  const { refetch } = useQuery(["user-login"], {
    queryFn: () =>
      fetchToken({ email: email.value ?? "", password: password.value ?? "" }),
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
    <Card>
      <Form formFields={formFields}></Form>
      <Button disabled={false} onClick={handleSubmit}>
        Sign
      </Button>
    </Card>
  );
};

export default UserLoginForm;
