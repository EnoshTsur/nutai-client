import Button from "../ui/Button/Button";
import Form from "../ui/Form/Form";
import useUserForm from "./hooks/useUserForm";

const UserProfileForm = () => {
  const { formFields } = useUserForm()

  return (
    <>
      <Form formFields={formFields}></Form>
      <Button disabled={true}>Sign</Button>
    </>
  );
};

export default UserProfileForm;
