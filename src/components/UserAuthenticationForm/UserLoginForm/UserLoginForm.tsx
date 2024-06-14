import { useEffect } from "react";
import { useQuery } from "react-query";
import Button from "../../ui/Button/Button";
import Form from "../../ui/Form/Form";
import useUserAuthenticationForm from "../hooks/useUserAuthenticationForm";

const fetchToken = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const data = await fetch("http://localhost:4899/api/users/login", {
    method: "post",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return await data.json();
};

const UserLoginForm = () => {
  const {
    formFields,
    formState: { email, password },
  } = useUserAuthenticationForm();

  const { refetch } = useQuery(["user-login"], {
    queryFn: () => fetchToken({ email: email.value ?? "", password: password.value ?? "" }),
    enabled: false,
    onSuccess: ({ token }) => {
      localStorage.setItem('token', token)
    },
    onError: (e) => {
      console.log(e)
    }
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

export default UserLoginForm;
