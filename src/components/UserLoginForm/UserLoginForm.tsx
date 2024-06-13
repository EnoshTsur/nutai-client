import Button from "../ui/Button/Button";
import Form from "../ui/Form/Form";
import useUserLoginForm from "./hooks/useUserLoginForm";

const fetchToken = async ({ email, password }: { email: string, password: string}) => {
    const data = await fetch('http://localhost:4899/api/users/login', {
        method: 'post',
        headers: {
			'content-type': 'application/json;charset=UTF-8',
		},
        body: JSON.stringify({
              email,
            password
        })
    })

    return await data.json()

}

const UserLoginForm = () => {
  const { formFields, formState: { email, password } } = useUserLoginForm()

  return (
    <>
      <Form formFields={formFields}></Form>
      <Button disabled={false} onClick={() => {
          fetchToken({ email: email.value ?? '', password: password.value ?? ''  })
          .then((d) => console.log(d))
          .catch((e) => console.log(e))
      }}>Sign</Button>
    </>
  );
};

export default UserLoginForm;
