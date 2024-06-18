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

  const handleAomuntChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name,
      value,
      errorHandler: (value) =>
        value === "" ? "This field must includes a value" : undefined,
    });
  };


  return {
    formState,
    handleNameChange,
    handlePackageChange,
    handleAomuntChange,
  };
};

export default useFoodItemForm;
