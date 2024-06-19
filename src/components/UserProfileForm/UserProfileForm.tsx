import { useCallback } from "react";
import { useQuery } from "react-query";
import userDetailsApi from "../../api/userDetailsApi";
import { UserBasicProfile } from "../../store/user/types";
import Button from "../ui/Button/Button";
import useUserForm from "./hooks/useUserProfileForm";
import Input from "../ui/Form/Input/Input";
import Select from "../ui/Form/Select/Select";
import FormContainer from "../ui/Form/FormContainer";

const registerUserProfile = async (userProfile: UserBasicProfile) => {
  try {
    const response = await userDetailsApi.post(
      "profile/users/new",
      userProfile
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const UserProfileForm = () => {
  const {
    formState: { age, weight, height, gender, activityLevel },
    handleAgeChange,
    handleWeightChange,
    handleHeightChange,
    handleGenderChange,
    handleActivityLevelChange,
    isValidToSubmit,
    userToSubmit,
  } = useUserForm();

  const { refetch } = useQuery(["user-profile"], {
    queryFn: () => registerUserProfile(userToSubmit!),
    enabled: false,
    onSuccess: (x) => {
      console.log(x);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleSubmit = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <FormContainer>
      <Input
        name="age"
        type="number"
        value={age.value}
        error={age.errorMessage}
        success={age.success}
        placeholder="Age"
        onChange={handleAgeChange}
      />
      <Input
        name="weight"
        type="number"
        value={weight.value}
        error={weight.errorMessage}
        success={weight.success}
        placeholder="Weight"
        onChange={handleWeightChange}
      />
      <Input
        name="height"
        type="number"
        value={height.value}
        error={height.errorMessage}
        success={height.success}
        placeholder="Height"
        onChange={handleHeightChange}
      />
      <Select
        value={gender.value}
        success={gender.success}
        options={["Male", "Female"]}
        label="Gender"
        onChange={handleGenderChange}
      />
      <Select
        value={activityLevel.value}
        success={activityLevel.success}
        options={[
          "Sedentary",
          "Lightly Active",
          "Moderately Active",
          "Very Active",
          "Extra Active",
        ]}
        label="Activity Level"
        onChange={handleActivityLevelChange}
      />
      <Button disabled={!isValidToSubmit} onClick={handleSubmit}>
        Sign
      </Button>
    </FormContainer>
  );
};

export default UserProfileForm;
