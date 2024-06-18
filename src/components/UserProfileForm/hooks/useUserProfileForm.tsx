import useForm from "../../ui/Form/hooks/useForm";
import { useMemo } from "react";
import {
  ActivityLevel,
  Gender,
  isActivityLevelKey,
  isGenderKey,
  UserBasicProfile,
} from "../../../store/user/types";

const useUserProfileForm = () => {
  const { formState, handleChange } = useForm({
    age: {
      name: "age",
      value: undefined,
      success: false,
    },
    weight: {
      name: "weight",
      value: undefined,
      success: false,
    },
    height: {
      name: "height",
      value: undefined,
      success: false,
    },
    gender: {
      name: "gender",
      value: undefined,
      success: false,
    },
    activityLevel: {
      name: "activityLevel",
      value: undefined,
      success: false,
    },
  });

  const isValidToSubmit = useMemo(
    () =>
      Object.values(formState).every(
        ({ errorMessage, value }) => !errorMessage && !!value
      ),
    [formState]
  );

  const userToSubmit = useMemo(() => {
    const genderKey = formState.gender.value ?? "";
    const activityKey =
      formState.activityLevel.value?.split(" ").join("") ?? "";

    if (
      isValidToSubmit &&
      isGenderKey(genderKey) &&
      isActivityLevelKey(activityKey)
    ) {
      const userProfile: UserBasicProfile = {
        age: Number(formState.age.value),
        height: Number(formState.height.value),
        weight: Number(formState.weight.value),
        gender: Gender[genderKey],
        activityLevel: ActivityLevel[activityKey],
      };

      return userProfile;
    }
    return undefined;
  }, [formState, isValidToSubmit]);

  const handleAgeChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name,
      value,
      errorHandler: (value) => {
        const age = Number(value);
        return age < 18 || age > 120
          ? "Age should be in a range of 18 - 120"
          : undefined;
      },
    });
  };

  const handleWeightChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name,
      value,
      errorHandler: (value) => {
        const weight = Number(value);
        return weight < 40 || weight > 150
          ? "Weight should be in a range of 40 - 150"
          : undefined;
      },
    });
  };

  const handleHeightChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name,
      value,
      errorHandler: (value) => {
        const height = Number(value);
        return height < 100 || height > 210
          ? "Height should be in a range of 100 - 210"
          : undefined;
      },
    });
  };

  const handleGenderChange = (value: string) =>
    handleChange({ name: formState.gender.name, value });

  const handleActivityLevelChange = (value: string) =>
    handleChange({ name: formState.activityLevel.name, value });

  

  return {
    userToSubmit,
    isValidToSubmit,
    formState,
    handleAgeChange,
    handleWeightChange,
    handleHeightChange,
    handleGenderChange,
    handleActivityLevelChange,
  };
};

export default useUserProfileForm;
