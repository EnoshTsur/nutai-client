import styled from "styled-components";

interface ContainerProps {
  readonly opacity: "1" | "0";
  readonly zindex: "1" | "-1";
}

const Container = styled.div<ContainerProps>`
  opacity: ${({ opacity }) => opacity};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ zindex }) => zindex };
`;
interface BackdropPros {
  readonly children?: React.ReactNode;
  readonly close?: () => void;
  readonly isOpen: boolean;
}
const Backdrop = ({ children, isOpen, close }: BackdropPros) => {
  return (
    <Container
      opacity={isOpen ? "1" : "0"}
      zindex={isOpen ? "1" : "-1"}
      onClick={() => close && close()}
    >
      {children}
    </Container>
  );
};

export default Backdrop;
