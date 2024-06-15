import { InputField, SelectField } from "../../ui/Form/types";
import useForm from "../../ui/Form/hooks/useForm";

const useUserForm = () => {
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
      "ModeratelyActive",
      "Very Active",
      "Extra Active",
    ],
    label: "Activity Level",
    onChange: (value) => handleChange({ name: formState.activityLevel.name, value }),
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
    formState,
  };
};

export default useUserForm;
