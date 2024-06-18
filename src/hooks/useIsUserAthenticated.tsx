import { useEffect } from "react";
import { useQuery } from "react-query";
import api from "../api/api";
import { useProgressStore } from "../store/progress/store";
import { useUserProfileStore } from "../store/user/store";
import { UserProfile } from "../store/user/types";

const validateToken = async () => {
  try {
    const response = await api.get("auth/users/validateToken");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUserProfile = async () => {
  try {
    const response = await api.get("profile/users/get");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const useIsUserAuthenticated = () => {
  const tokenQuery = useQuery(["user-token-validation"], {
    queryFn: validateToken,
    enabled: false,
    staleTime: Infinity, // Data will be considered fresh indefinitely
    cacheTime: 0, // Disable caching if not already disabled by default
    refetchOnMount: false, // Do not refetch data when the component mounts
    refetchOnReconnect: false, // Do not refetch data on network reconnect
    refetchOnWindowFocus: false,
  });

  const userProfileQuery = useQuery<UserProfile>(["user-profile-by-token"], {
    queryFn: getUserProfile,
    enabled: false,
    staleTime: Infinity, // Data will be considered fresh indefinitely
    cacheTime: 0, // Disable caching if not already disabled by default
    refetchOnMount: false, // Do not refetch data when the component mounts
    refetchOnReconnect: false, // Do not refetch data on network reconnect
    refetchOnWindowFocus: false,
  });

  const { setUserProfile } = useUserProfileStore(({ setUserProfile }) => ({
    setUserProfile,
  }));

  const { setStage } = useProgressStore(({ setStage }) => ({ setStage }));

  useEffect(() => {
    tokenQuery.refetch();
    userProfileQuery.refetch();
  }, []);

  useEffect(() => {
    if (userProfileQuery.data) {
      const { age, height, weight, gender, activityLevel, bmr, tdee } =
        userProfileQuery.data;
      setUserProfile({ age, height, weight, gender, activityLevel, bmr, tdee });
    }

    if ((userProfileQuery.isFetched, tokenQuery.isFetched)) {
      const stage = [
        userProfileQuery.isSuccess,
        tokenQuery.isSuccess,
      ].reduce<number>(
        (progress, passed) => (passed ? progress + 1 : progress),
        1
      );
      setStage(stage);
    }
  }, [userProfileQuery.isSuccess, tokenQuery.isSuccess, userProfileQuery.data]);
};

export default useIsUserAuthenticated;
