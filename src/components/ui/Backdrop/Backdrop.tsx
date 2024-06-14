import styled from "styled-components";

const Container = styled.div<{ isOpen: boolean }>`
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ isOpen }) => isOpen ? '1' : '-1'};
`;
interface BackdropPros {
  readonly children?: React.ReactNode;
  readonly close: () => void;
  readonly isOpen: boolean;
}
const Backdrop = ({ children, isOpen, close }: BackdropPros) => {
  return (
    <Container isOpen={isOpen} onClick={() => close()}>
      {children}
    </Container>
  );
};

export default Backdrop;
