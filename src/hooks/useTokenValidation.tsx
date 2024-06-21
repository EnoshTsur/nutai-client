import { useQuery } from "react-query";
import userDetailsApi from "../api/userDetailsApi";

const validateToken = async () => {
  try {
    const response = await userDetailsApi.get("auth/users/validateToken");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const useTokenValidation = () => {
  
  const { isSuccess, isFetched } = useQuery(["user-token-validation"], {
    queryFn: validateToken,
    staleTime: 500, 
    cacheTime: 0, 
    refetchOnMount: false, 
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    isSuccess,
    isFetched
  }
};

export default useTokenValidation;
