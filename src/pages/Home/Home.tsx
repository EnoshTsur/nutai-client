import styled from "styled-components";
import BodyBuilderLogo from "../../components/Logo/BodyBuilderLogo";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/ui/Card/Card";

const Text = styled.p<{ color: string }>`
  color: ${({ color }) => color};
`;

const InfoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const Container = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <Nav />
      <Card>
        {/* <InfoArea>
          <div style={{ display: "flex" }}>
            <div style={{ flexBasis: '20%'}}>
            </div>
            <div style={{ flexBasis: "80%" }}>
              <Text color="#c23ac2">
                Our app is your personal guide to achieving your fitness and
                nutrition golas.
              </Text>
              <Text color="#f67df6">
                Each week, update your weight and status, and our AI will
                analyze your progress.
              </Text>
              <Text color="white">
                Start your journey towards a healthier fitter you, now!
              </Text>
            </div>
          </div>
        </InfoArea> */}
      </Card>
    </Container>
  );
};

export default Home;