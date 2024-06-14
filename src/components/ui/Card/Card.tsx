import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { lighten } from 'polished'


const Container = styled.div<{ bgColor: string }>`
  background: ${({ bgColor }) => bgColor};
  border-radius: 8px;
`;

interface CardProps {
  readonly children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {

  return (
    <Container bgColor={lighten(0.05, '#000000')}>
      {children}
    </Container>
  );
};

export default Card;
