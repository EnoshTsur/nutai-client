import { useQuery } from "react-query";
import userDetailsApi from "../api/userDetailsApi";

const getUserProfile = async () => {
  try {
    const response = await userDetailsApi.get("profile/users/get");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const useUserProfile = () => {
  
  const { data, isError, isFetched } = useQuery(["user-profile"], {
    queryFn: getUserProfile,
    staleTime: Infinity, 
    cacheTime: 0, 
    refetchOnMount: false, 
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    data,
    isError,
    isFetched
  }
};

export default useUserProfile;
