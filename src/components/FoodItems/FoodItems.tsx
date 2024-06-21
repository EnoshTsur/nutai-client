import { useQuery } from "react-query";
import foodItemApi from "../../api/foodItemApi";
import Loader from "../Loader/Loader";
import { FoodItem } from "../../store/foodItem/types";
import styled from "styled-components";
import { useMemo } from "react";
import Table from "../ui/Table/Table";

const getAllFoodItems = async () => {
  try {
    const response = await foodItemApi.get("food-item/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const FoodItems = () => {
  const { data, isFetching, error } = useQuery<{
    foodItems: ReadonlyArray<FoodItem & { _id: string, __v: string }>;
  }>(["all-food-items"], { queryFn: getAllFoodItems });
  const headers = useMemo(
    () => ["", "Serving Amount", "Package Amount", "Calories", "Carbohydrate", "Fat", "Protein"],
    []
  );

  const tableData = useMemo(
    () =>
      !data
        ? []
        : data.foodItems.map(({ _id, __v, name, brand, ...rest }) =>
            Object.values({ name: `${brand}: ${name}`, ...rest }).map(String)
          ),
    [data]
  );

  return (
    <div style={{ color: "white" }}>
      {isFetching && <Loader />}
      <Table headers={headers} tableRows={tableData} />
    </div>
  );
};

export default FoodItems;
