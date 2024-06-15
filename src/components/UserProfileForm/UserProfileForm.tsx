import { useCallback, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import api from "../../api/api";
import { ActivityLevel, Gender, UserProfile } from "../../user/types";
import Button from "../ui/Button/Button";
import Form from "../ui/Form/Form";
import useUserForm from "./hooks/useUserProfileForm";

const registerUserProfile = async (userProfile: UserProfile) => {
  try {
    const response = await api.post("profile/users/new", userProfile);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const UserProfileForm = () => {
  const { formFields, isValidToSubmit, userToSubmit } = useUserForm()

  const { refetch } = useQuery(["user-profile"], {
    queryFn: () =>
      registerUserProfile(userToSubmit!),
    enabled: false,
    onSuccess: (x) => {
      console.log(x);
      
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleSubmit = useCallback(() => {
    refetch()
  }, [refetch, userToSubmit])

  return (
    <>
      <Form formFields={formFields}></Form>
      <Button disabled={!isValidToSubmit} onClick={handleSubmit}>Sign</Button>
    </>
  );
};

export default UserProfileForm;
