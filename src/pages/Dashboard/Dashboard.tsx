import { useNavigate } from "react-router";
import routes from "../../routes/AppRoutes";
import Loader from "../../components/Loader/Loader";
import useUserProfile from "../../hooks/useUserProfile";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  const { userProfile } = routes;

  const { data, isFetched } = useUserProfile();

  useEffect(() => {
    if (isFetched && !data) {
      navigate(userProfile.path);
    }
  }, [data, isFetched]);

  return !isFetched ? (
    <Loader />
  ) : (
    <h1 style={{ color: "white" }}>{JSON.stringify(data)}</h1>
  );
};

export default Dashboard;
