import { useNavigate } from "react-router";
import styled from "styled-components";
import routes from "../../routes/AppRoutes";
import Logo from "../Logo/Logo";
import Button from "../ui/Button/Button";
import Hamburger from "../ui/Button/Hamburger";
import Card from "../ui/Card/Card";

const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const HeaderItems = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
`;

const ButtonItems = styled.div`
  position: relative;
  display: flex;
  padding: 0 1rem;
  gap: 1rem;
  align-items: center;
  overflow: hidden;
`;

const NavHeader = styled.header`
  align-self: baseline;
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
  color: #d589d5;
  font-size: 36px;
  padding: 0.3rem 0;
  text-shadow: 0 2px 2px black;
`;


const DesktopButton = styled(Button)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = () => {

  const navigate = useNavigate();

  const { login, register } = routes;

  return (
    <Card >
      <NavContainer>
        <HeaderItems>
          <NavHeader>NutAI</NavHeader>
          <Logo />
        </HeaderItems>
        <ButtonItems>
          <Hamburger routes={Object.values([login, register])} />
          <DesktopButton onClick={() => navigate(login.path)}>
            Login
          </DesktopButton>
          <DesktopButton onClick={() => navigate(register.path)}>
            Register
          </DesktopButton>
        </ButtonItems>
      </NavContainer>
    </Card>
  );
};

export default Nav;
