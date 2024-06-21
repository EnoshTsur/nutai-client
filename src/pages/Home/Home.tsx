import { useNavigate } from "react-router";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/ui/Button/Button";
import useTokenValidation from "../../hooks/useTokenValidation";
import routes from "../../routes/AppRoutes";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";

const Text = styled.p<{ color: string }>`
  color: ${({ color }) => color};
`;

const InfoAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 60%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 668px) {
    width: 80%;
  }

  @media (max-width: 568px) {
    width: 90%;
  }
`;

const Container = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Home = () => {
  const navigate = useNavigate();

  const { dashboard } = routes;

  const { isSuccess, isFetched } = useTokenValidation();

  useEffect(() => {
    if (isFetched && isSuccess) {
      navigate(dashboard.path);
    }
  }, [isSuccess, isFetched]);

  return !isFetched ? (
    <Loader />
  ) : (
    <Container>
      <Nav />
      <InfoAreaContainer>
        <Text color="white" style={{ fontStyle: "italic" }}>
          #Your personal guide to achieving your nutrition golas.
        </Text>
        <h1 style={{ color: "white", fontSize: "42px" }}>
          Start your journey towards a healthier fitter you, now!
        </h1>
        <Text color="pink">
          Each week, update your weight and status, and our AI will analyze your
          progress.
        </Text>
        <Button onClick={() => navigate("/user-profile")}>User Profile</Button>
        <Button onClick={() => navigate("/food-item")}>Food Item</Button>
        <Button onClick={() => navigate("/food-items")}>All food Items</Button>
      </InfoAreaContainer>
    </Container>
  );
};

export default Home;
