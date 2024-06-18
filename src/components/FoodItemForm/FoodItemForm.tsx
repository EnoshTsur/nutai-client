import { useCallback } from "react";
import { useQuery } from "react-query";
import api from "../../api/api";
import { UserBasicProfile } from "../../store/user/types";
import Button from "../ui/Button/Button";
import Input from "../ui/Form/Input/Input";
import FormContainer from "../ui/Form/FormContainer";
import useFoodItemForm from "./hooks/useFoodItemForm";

const registerUserProfile = async (userProfile: UserBasicProfile) => {
  try {
    const response = await api.post("profile/users/new", userProfile);
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
    handleNameChange,
    handlePackageChange,
    handleAomuntChange,
  } = useFoodItemForm();

  const { refetch } = useQuery(["food-item"], {
    queryFn: () => {},
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
      <Button disabled={true} onClick={handleSubmit}>
        Sign
      </Button>
    </FormContainer>
  );
};

export default FoodItemForm;
