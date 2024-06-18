import { useNavigate } from "react-router";
import styled, { keyframes, css } from "styled-components";
import { RouteValue } from "../../../routes/AppRoutes";
import Backdrop from "../Backdrop/Backdrop";
import Button from "./Button";
import useHamburger from "./hooks/useHamburger";

const openAnimation = keyframes`
    0% {
        width: 0;
    }

    100%{
        width: 70%;
    }
`;

const HamburgerButton = styled(Button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  gap: 0.3rem;
  flex-direction: column;

  @media (min-width: 769px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div<{ isopen: boolean }>`
  position: fixed;
  top: 5.5rem;
  right: 1rem;
  width: 70%;
  border: 1px solid #000000;
  border-radius: 8px;
  color: #ffffff;
  background-color: #262626;
  z-index: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({ isopen }) =>
  isopen &&
    css`
      animation: ${openAnimation} 1s;
    `}
`;

const HamburgerMenuItem = styled.div`
  padding: 1rem;
  text-align: right;
  border-bottom: 1px solid #131313;
  &:hover {
    cursor: pointer;
    background: #3b3a3a;
  }
`;

const Line = styled.div<{ isopen: boolean }>`
  width: 95%;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to top, purple, #d589d5) 1;
  transition: transform 0.5s ease-out;

  ${({ isopen }) =>
  isopen &&
    `
    &:nth-child(1) {
      transform: translate(-8px, 7px) rotate(90deg);
    }

    &:nth-child(2) {
      transform: translate(-1px, 1px) rotate(90deg);
    }

    &:nth-child(3) {
      transform: translate(6px, -6px) rotate(90deg);
    }
  `}
`;

interface HamburgerProps {
  readonly routes: ReadonlyArray<RouteValue>;
}

const Hamburger = ({ routes }: HamburgerProps) => {
  const { isOpen, open, close } = useHamburger();
  const navigate = useNavigate();

  return (
    <>
      <Backdrop isOpen={isOpen} close={close}>
        <HamburgerMenu isopen={isOpen}>
          {routes.map(({ path, label }) => (
            <HamburgerMenuItem
              key={`hamburger-${path}`}
              onClick={() => navigate(path)}
            >
              {label}
            </HamburgerMenuItem>
          ))}
        </HamburgerMenu>
      </Backdrop>
      <HamburgerButton onClick={open}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Line key={`line ${i}`} isopen={isOpen} />
        ))}
      </HamburgerButton>
    </>
  );
};

export default Hamburger;
