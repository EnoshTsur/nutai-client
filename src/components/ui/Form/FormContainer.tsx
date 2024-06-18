import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: flex-start;
`;

interface FormContainerProps {
  readonly children: React.ReactNode
}


const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <Container>
      { children }
    </Container>
  );
};

export default FormContainer;
