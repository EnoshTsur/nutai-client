import { useQuery } from "react-query";
import Button from "../../ui/Button/Button";
import Form from "../../ui/Form/Form";
import useUserAuthentication from "../hooks/useUserAuthenticationForm";

const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const data = await fetch("http://localhost:4899/api/users/register", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return await data.json();
};

const UserRegister = () => {
  const {
    formFields,
    formState: { email, password },
  } = useUserAuthentication();

  const { refetch } = useQuery(["user-register"], {
    queryFn: () =>
      registerUser({ email: email.value ?? "", password: password.value ?? "" }),
    enabled: false,
    onSuccess: ({ token }) => {
      localStorage.setItem("token", token);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleSubmit = () => {
    refetch()
  }

  return (
    <>
      <Form formFields={formFields}></Form>
      <Button
        disabled={false}
        onClick={handleSubmit}
      >
        Sign
      </Button>
    </>
  );
};

export default UserRegister;
