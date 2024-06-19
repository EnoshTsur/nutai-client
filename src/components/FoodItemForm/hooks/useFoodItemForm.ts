import { useCallback, useMemo } from "react";
import useForm from "../../ui/Form/hooks/useForm";
import { FoodItem, isFoodItem } from "../../../store/foodItem/types";

const useFoodItemForm = () => {
  const { formState, handleChange } = useForm({
    name: {
      name: "name",
      value: "",
      success: false,
    },
    brand: {
      name: "brand",
      value: "",
      success: false,
    },
    servingAmount: {
      name: "servingAmount",
      value: "",
      success: false,
    },
    packageAmount: {
      name: "packageAmount",
      value: "",
      success: false,
    },
    calories: {
      name: "calories",
      value: "",
      success: false,
    },
    carbohydrate: {
      name: "carbohydrate",
      value: "",
      success: false,
    },
    fat: {
      name: "fat",
      value: "",
      success: false,
    },
    protein: {
      name: "protein",
      value: "",
      success: false,
    },
  });

  const extractFoodItem = useMemo((): FoodItem | undefined => {
    const foodItem = Object.fromEntries(
      Object.entries(formState).map(([k, v]) => [
        k,
        [
          "servingAmount",
          "packageAmount",
          "calories",
          "fat",
          "carbohydrate",
          "protein",
        ].some((key) => key === k)
          ? Number(v.value)
          : v.value,
      ])
    );

    if (isFoodItem(foodItem)){
      return foodItem
    }
    return undefined
  }, [formState]);

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
        value === "" || Number(value) <= 0
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
    extractFoodItem,
    handleNameChange,
    handlePackageChange,
    handleAomuntChange,
  };
};

export default useFoodItemForm;
