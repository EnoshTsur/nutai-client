import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled, { css, keyframes } from "styled-components";
import routes from "../../routes/AppRoutes";
import Logo from "../Logo/Logo";
import Backdrop from "../ui/Backdrop/Backdrop";
import Button from "../ui/Button/Button";
import Card from "../ui/Card/Card";

const myAnimation = keyframes`
    0% {
        width: 0;
    }

    100%{
        width: 95%;
    }
`

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

const Line = styled.div`
  width: 95%;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to top, purple, #d589d5) 1;
  transition: transform 1s ease-out;
`;

const HamburgerButton = styled(Button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  gap: 0.3rem;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 5.5rem;
  left: 1rem;
  width: 95%;
  border: 1px solid #000000;
  border-radius: 8px;
  color: #ffffff;
  background-color: #0d0d0d;
  z-index: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({ isOpen }) => isOpen && css`
  animation: ${myAnimation} 2s;
  `}
`;

const HamburgerMenuItem = styled.div`
    padding: 1rem;
    background: linear-gradient(45deg, black, transparent);
    &:hover {
        cursor: pointer;
        background: #240424;
    }
`

const DesktopButton = styled(Button)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);

  const { login, register } = routes;

  return (
    <Card>
      <NavContainer>
        <HeaderItems>
          <NavHeader>NutAI</NavHeader>
          <Logo />
        </HeaderItems>
        <ButtonItems>
     
            <Backdrop isOpen={isOpen} close={() => setOpen(false)}>
              <HamburgerMenu
                ref={ref}
                isOpen={isOpen}
              >
                <HamburgerMenuItem onClick={() => navigate(login.path)}>Login</HamburgerMenuItem>
                <HamburgerMenuItem onClick={() => navigate(register.path)}>Register</HamburgerMenuItem>
              </HamburgerMenu>
            </Backdrop>
          <HamburgerButton
            onClick={() => {
              if (!isOpen && ref.current) {
                ref.current.focus();
              }
              setOpen((pre) => !pre);
            }}
          >
            <Line
              style={{
                transform: isOpen
                  ? "translate(-8px, 7px) rotate(90deg)"
                  : "none",
              }}
            />
            <Line
              style={{
                transform: isOpen
                  ? "translate(-1px, 1px) rotate(90deg)"
                  : "none",
              }}
            />
            <Line
              style={{
                transform: isOpen
                  ? "translate(6px, -6px) rotate(90deg)"
                  : "none",
              }}
            />
          </HamburgerButton>
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
