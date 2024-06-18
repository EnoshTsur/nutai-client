import { InputField } from "../../ui/Form/types";
import useForm from "../../ui/Form/hooks/useForm";

const useFoodItemForm = () => {
  const { formState, handleChange } = useForm({
    name: {
      name: "name",
      value: undefined,
      success: false,
    },
    brand: {
      name: "brand",
      value: undefined,
      success: false,
    },
    servingAmount: {
      name: "servingAmount",
      value: undefined,
      success: false,
    },
    packageAmount: {
      name: "packageAmount",
      value: undefined,
      success: false,
    },
    calories: {
      name: "calories",
      value: undefined,
      success: false,
    },
    carbohydrate: {
      name: "carbohydrate",
      value: undefined,
      success: false,
    },
    fat: {
      name: "fat",
      value: undefined,
      success: false,
    },
    protein: {
      name: "protein",
      value: undefined,
      success: false,
    },
  });

  const handleNameChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name,
      value,
      errorHandler: (value) =>
        value === "" ? `This field must to contain any value` : undefined,
    });
  };

  const handlePackageChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name,
      value,
      errorHandler: (value) =>
        !value || Number(value) <= 0
          ? "Value has to be greater then 0"
          : undefined,
    });
  };

  const handleAomuntChnge = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name,
      value,
      errorHandler: (value) =>
        value == "" ? "This field must includes a value" : undefined,
    });
  };

  const nameInputField: InputField = {
    formType: "input",
    inputType: "text",
    value: formState.name.value,
    errorMessage: formState.name.errorMessage,
    success: formState.name.success,
    label: "Product Name",
    name: formState.name.name,
    onChange: handleNameChange,
  };

  const brandInputField: InputField = {
    formType: "input",
    inputType: "text",
    value: formState.brand.value,
    errorMessage: formState.brand.errorMessage,
    success: formState.brand.success,
    label: "Product Brand",
    name: formState.brand.name,
    onChange: handleNameChange,
  };

  const packageAmountInputField: InputField = {
    formType: "input",
    inputType: "number",
    value: formState.packageAmount.value,
    errorMessage: formState.packageAmount.errorMessage,
    success: formState.packageAmount.success,
    label: "Package Amount",
    name: formState.packageAmount.name,
    onChange: handlePackageChange,
  };

  const servingAmountInputField: InputField = {
    formType: "input",
    inputType: "number",
    value: formState.servingAmount.value,
    errorMessage: formState.servingAmount.errorMessage,
    success: formState.servingAmount.success,
    label: "Serving Amount",
    name: formState.servingAmount.name,
    onChange: handleNameChange,
  };

  const caloriesInputField: InputField = {
    formType: "input",
    inputType: "number",
    value: formState.calories.value,
    errorMessage: formState.calories.errorMessage,
    success: formState.calories.success,
    label: "Calories",
    name: formState.calories.name,
    onChange: handleAomuntChnge,
  };

  const carbohydrateInputField: InputField = {
    formType: "input",
    inputType: "number",
    value: formState.carbohydrate.value,
    errorMessage: formState.carbohydrate.errorMessage,
    success: formState.carbohydrate.success,
    label: "Carbohydrate",
    name: formState.carbohydrate.name,
    onChange: handleAomuntChnge,
  };

  const fatInputField: InputField = {
    formType: "input",
    inputType: "number",
    value: formState.fat.value,
    errorMessage: formState.fat.errorMessage,
    success: formState.fat.success,
    label: "Fat",
    name: formState.fat.name,
    onChange: handleAomuntChnge,
  };

  const proteinInputField: InputField = {
    formType: "input",
    inputType: "number",
    value: formState.protein.value,
    errorMessage: formState.protein.errorMessage,
    success: formState.protein.success,
    label: "Protein",
    name: formState.protein.name,
    onChange: handleAomuntChnge,
  };

  return {
    formFields: [
      nameInputField,
      brandInputField,
      packageAmountInputField,
      servingAmountInputField,
      caloriesInputField,
      carbohydrateInputField,
      fatInputField,
      proteinInputField
    ],
    formState,
  };
};

export default useFoodItemForm;
