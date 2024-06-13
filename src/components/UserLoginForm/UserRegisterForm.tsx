import Button from "../ui/Button/Button";
import Form from "../ui/Form/Form";
import useUserLoginForm from  './hooks/useUserLoginForm'

const registerUser = async ({ email, password }: { email: string, password: string }) => {
    debugger
    const data = await fetch('http://localhost:4899/api/users/register', {
        method: 'post',
        headers: {
			'content-type': 'application/json',
		},
        body: JSON.stringify({
              email,
            password
        })
    })

    return await data.json()

}

const UserRegister = () => {

  const { formFields, formState: { email, password } } = useUserLoginForm()


    return (
        <>
          <Form formFields={formFields}></Form>
          <Button disabled={false} onClick={() => {
              registerUser({ email: email.value ?? '', password: password.value ?? ''  })
              .then((d) => console.log(d))
              .catch((e) => console.log(e))
          }}>Sign</Button>
        </>
      );
}

export default UserRegister