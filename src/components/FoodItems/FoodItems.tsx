import { useQuery } from "react-query";
import foodItemApi from "../../api/foodItemApi";
import Loader from "../Loader/Loader";
import { FoodItem } from "../../store/foodItem/types";
import styled from "styled-components";

const getAllFoodItems = async () => {
  try {
    const response = await foodItemApi.get("food-item/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const Table = styled.table`
  td,
  th {
    padding: 1rem;
    align-self: center;
  }

  td {
    background: linear-gradient(to right, transparent, #212020);
    color: #d3d;
    border: 1px solid #d3d3;
  }
`;

const FoodItems = () => {
  const { data, isFetching, error } = useQuery<ReadonlyArray<FoodItem>>(
    ["all-food-items"],
    { queryFn: getAllFoodItems }
  );

  return (
    <div style={{ color: "white" }}>
      {isFetching && <Loader />}
      <Table>
        <thead>
          <th></th>
          <th>calories</th>
          <th>fat</th>
          <th>protein</th>
          <th>carbohydrate</th>
          <th>package amount</th>
        </thead>
        <tbody>
          {data &&
            data.map(
              ({
                name,
                brand,
                calories,
                packageAmount,
                protein,
                fat,
                carbohydrate,
              }) => (
                <tr>
                  <td>{name} {brand}</td>
                  <td>{calories}</td>
                  <td>{fat}</td>
                  <td>{protein}</td>
                  <td>{carbohydrate}</td>
                  <td>{packageAmount}</td>
                </tr>
              )
            )}
        </tbody>
      </Table>
    </div>
  );
};

export default FoodItems;
