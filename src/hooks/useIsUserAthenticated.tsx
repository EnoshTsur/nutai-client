import { useEffect} from 'react'
import { useQuery } from 'react-query';
import api from '../api/api';
import { useUserProfileStore } from '../user/store';
import { UserProfile } from '../user/types';

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

    const token = localStorage.getItem('token')

    const tokenQuery = useQuery(['user-token-validation'], { queryFn: validateToken, staleTime: 0, enabled: false })

    const userProfileQuery = useQuery<UserProfile>(['user-profile-by-token'], { queryFn: getUserProfile, staleTime: 0, enabled: false })

    const { setUserProfile } = useUserProfileStore(({ setUserProfile }) => ({ setUserProfile }))

    useEffect(() => {
      if (token) {
        tokenQuery.refetch()
        userProfileQuery.refetch()
      }

      if (userProfileQuery.data) {
        const { age, height, weight, gender, activityLevel, bmr, tdee } = userProfileQuery.data
        setUserProfile({ age, height, weight, gender, activityLevel, bmr, tdee })
      }
    }, [userProfileQuery.data, tokenQuery.data, token]);
  
    return {
      isAuthenticated: tokenQuery.isSuccess,
      hasProfile: userProfileQuery.isSuccess,
    }
  
}

export default useIsUserAuthenticated