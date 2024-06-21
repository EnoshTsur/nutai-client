import { useCallback } from "react";
import { useQuery } from "react-query";
import userDetailsApi from "../../api/userDetailsApi";
import { UserBasicProfile } from "../../store/user/types";
import Button from "../ui/Button/Button";
import useUserForm from "./hooks/useUserProfileForm";
import Input from "../ui/Form/Input/Input";
import Select from "../ui/Form/Select/Select";
import FormContainer from "../ui/Form/FormContainer";
import styled from "styled-components";

interface TitleProps {
  readonly fontsize?: string;
  readonly color?: string;
}

const Title = styled.p<TitleProps>`
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "36px")};
`;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 75%;
  }
  
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 568px) {
    width: 85%;
  }

  @media (max-width: 468px) {
    width: 90%;
  }
`;

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

  const { refetch } = useQuery(["user-profile-new"], {
    queryFn: () => registerUserProfile(userToSubmit!),
    enabled: false,
    onSuccess: (x) => {
      console.log("user profile success", x);
    },
    onError: (e) => {
      console.log("user profile failure", e);
    },
  });

  const handleSubmit = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <Container>
      <FormContainer>
        <div>
          <Title fontsize="56px">Now that you are logged in!</Title>
          <Title fontsize="24px" color="#d567d5">
            We need a few detailts about you,
          </Title>
          <Title fontsize="24px" color="#d567d5">
            to create a personalized menu that fits your goals!
          </Title>
        </div>
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
    </Container>
  );
};

export default UserProfileForm;
