import styled, { keyframes } from "styled-components";
import Backdrop from "../ui/Backdrop/Backdrop";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Create a styled div for the spinner
const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid transparent; // Transparent border as the base
  border-top-color: blue; // Top part color
  border-right-color: #0264ef; // Right part color
  animation: ${spin} 1s linear infinite; // Apply the spin animation
`;

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Backdrop isOpen={true}>
      <SpinnerContainer>
        <Spinner />;
      </SpinnerContainer>
    </Backdrop>
  );
};

export default Loader;
