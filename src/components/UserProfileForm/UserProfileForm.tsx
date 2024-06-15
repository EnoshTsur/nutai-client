import { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import api from "../../api/api";
import { ActivityLevel, Gender, UserProfile } from "../../user/types";
import Button from "../ui/Button/Button";
import Form from "../ui/Form/Form";
import useUserForm from "./hooks/useUserForm";

const registerUserProfile = async (userProfile: UserProfile) => {
  try {
    const response = await api.post("profile/users/new", userProfile);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const UserProfileForm = () => {
  const { formFields, formState } = useUserForm()


  // @ts-ignore
  const xxx = useMemo(() => Object.fromEntries(Object.entries(formState).map(([k, { value }]) => k === 'gender' ? [k, Gender[value]] : k === 'activityLevel' ? [k, ActivityLevel[value]] : [k, Number(value)])), [formState])

  useEffect(() => {
    console.log('!!!',xxx);
    
  }, [xxx])

  const { refetch } = useQuery(["user-profile"], {
    queryFn: () =>
    // @ts-ignore
      registerUserProfile(xxx),
    enabled: false,
    onSuccess: (x) => {
      console.log(x);
      
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleSubmit = () => {
    refetch();
  };

  return (
    <>
      <Form formFields={formFields}></Form>
      <Button onClick={handleSubmit}>Sign</Button>
    </>
  );
};

export default UserProfileForm;
