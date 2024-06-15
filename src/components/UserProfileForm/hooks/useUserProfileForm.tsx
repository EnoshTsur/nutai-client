import { InputField, SelectField } from "../../ui/Form/types";
import useForm from "../../ui/Form/hooks/useForm";
import { useMemo } from "react";
import {
  ActivityLevel,
  Gender,
  isActivityLevelKey,
  isGenderKey,
  UserProfile,
} from "../../../user/types";
import { calculateBMR, calculateTDEE } from "../../../user/store";

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
      const userProfile: UserProfile = {
        age: Number(formState.age.value),
        height: Number(formState.height.value),
        weight: Number(formState.weight.value),
        gender: Gender[genderKey],
        activityLevel: ActivityLevel[activityKey],
      };

      const bmr = calculateBMR(userProfile);
      const tdee = calculateTDEE(userProfile);
      return { ...userProfile, tdee, bmr };
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

  const genderSelectField: SelectField = {
    formType: "select",
    value: formState.gender.value,
    success: formState.gender.success,
    options: ["Male", "Female"],
    label: "Gender",
    onChange: (value) => handleChange({ name: formState.gender.name, value }),
  };

  const activitySelectField: SelectField = {
    formType: "select",
    value: formState.activityLevel.value,
    success: formState.activityLevel.success,
    options: [
      "Sedentary",
      "Lightly Active",
      "Moderately Active",
      "Very Active",
      "Extra Active",
    ],
    label: "Activity Level",
    onChange: (value) =>
      handleChange({ name: formState.activityLevel.name, value }),
  };

  const ageInputFeild: InputField = {
    formType: "input",
    inputType: "number",
    value: formState.age.value,
    errorMessage: formState.age.errorMessage,
    success: formState.age.success,
    label: "Age",
    name: formState.age.name,
    onChange: handleAgeChange,
  };

  const heightInputFeild: InputField = {
    formType: "input",
    inputType: "number",
    value: formState.height.value,
    errorMessage: formState.height.errorMessage,
    success: formState.height.success,
    label: "Height",
    name: formState.height.name,
    onChange: handleHeightChange,
  };

  const weightInputFeild: InputField = {
    formType: "input",
    inputType: "number",
    value: formState.weight.value,
    errorMessage: formState.weight.errorMessage,
    success: formState.weight.success,
    label: "Weight",
    name: formState.weight.name,
    onChange: handleWeightChange,
  };

  return {
    formFields: [
      ageInputFeild,
      heightInputFeild,
      weightInputFeild,
      genderSelectField,
      activitySelectField,
    ],
    userToSubmit,
    isValidToSubmit,
  };
};

export default useUserProfileForm;
