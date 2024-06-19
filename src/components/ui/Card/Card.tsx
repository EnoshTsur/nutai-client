import styled from "styled-components";
import { lighten } from 'polished'


const Container = styled.div<{ backgroundcolor: string }>`
  background: ${({ backgroundcolor }) => backgroundcolor};
  border-radius: 8px;
`;

interface CardProps {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}

const Card = ({ children, style }: CardProps) => {

  return (
    <Container style={style} backgroundcolor={lighten(0.05, '#000000')}>
      {children}
    </Container>
  );
};

export default Card;
