import styled from "styled-components";

interface ContainerProps {
    readonly isopen: boolean
}

const Container = styled.div<ContainerProps>`
  opacity: ${({ isopen }) => (isopen ? "1" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ isopen }) => (isopen ? "1" : "-1")};
`;
interface BackdropPros {
  readonly children?: React.ReactNode;
  readonly close: () => void;
  readonly isOpen: boolean;
}
const Backdrop = ({ children, isOpen, close }: BackdropPros) => {
  return (
    <Container isopen={isOpen} onClick={() => close()}>
      {children}
    </Container>
  );
};

export default Backdrop;
