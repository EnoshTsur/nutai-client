import { useCallback } from "react";
import { useQuery } from "react-query";
import Button from "../ui/Button/Button";
import Input from "../ui/Form/Input/Input";
import FormContainer from "../ui/Form/FormContainer";
import useFoodItemForm from "./hooks/useFoodItemForm";
import foodItemApi from "../../api/foodItemApi";
import { FoodItem } from "../../store/foodItem/types";

const addFoodItem = async (foodItem: FoodItem) => {
  try {
    const response = await foodItemApi.post(
      "food-item/new",
      foodItem
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const FoodItemForm = () => {
  const {
    formState: {
      name,
      brand,
      servingAmount,
      packageAmount,
      calories,
      fat,
      carbohydrate,
      protein,
    },
    extractFoodItem,
    handleNameChange,
    handlePackageChange,
    handleAomuntChange,
  } = useFoodItemForm();

  const { refetch } = useQuery(["food-item"], {
    queryFn: () => addFoodItem(extractFoodItem!),
    enabled: false,
    onSuccess: (x) => {
      console.log(x);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleSubmit = useCallback(() => {
    if (extractFoodItem) {
        refetch();
    }
  }, [refetch, extractFoodItem]);

  return (
    <FormContainer>
      <Input
        name="name"
        type="text"
        value={name.value}
        error={name.errorMessage}
        success={name.success}
        placeholder="Name"
        onChange={handleNameChange}
      />
      <Input
        name="brand"
        type="text"
        value={brand.value}
        error={brand.errorMessage}
        success={brand.success}
        placeholder="Brand"
        onChange={handleNameChange}
      />
      <Input
        name="servingAmount"
        type="number"
        value={servingAmount.value}
        error={servingAmount.errorMessage}
        success={servingAmount.success}
        placeholder="Serving Amount"
        onChange={handleAomuntChange}
      />
      <Input
        name="packageAmount"
        type="number"
        value={packageAmount.value}
        error={packageAmount.errorMessage}
        success={packageAmount.success}
        placeholder="Package Amount"
        onChange={handlePackageChange}
      />
      <Input
        name="calories"
        type="number"
        value={calories.value}
        error={calories.errorMessage}
        success={calories.success}
        placeholder="Calories"
        onChange={handleAomuntChange}
      />
      <Input
        name="carbohydrate"
        type="number"
        value={carbohydrate.value}
        error={carbohydrate.errorMessage}
        success={carbohydrate.success}
        placeholder="Carbohydrate"
        onChange={handleAomuntChange}
      />
      <Input
        name="fat"
        type="number"
        value={fat.value}
        error={fat.errorMessage}
        success={fat.success}
        placeholder="Fat"
        onChange={handleAomuntChange}
      />
      <Input
        name="protein"
        type="number"
        value={protein.value}
        error={protein.errorMessage}
        success={protein.success}
        placeholder="Protein"
        onChange={handleAomuntChange}
      />
      <Button disabled={extractFoodItem == null} onClick={handleSubmit}>
        Sign
      </Button>
    </FormContainer>
  );
};

export default FoodItemForm;
