import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { lighten } from 'polished'


const Container = styled.div<{ bgColor: string }>`
  background: ${({ bgColor }) => bgColor};
  border-radius: 8px;
`;

interface CardProps {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}

const Card = ({ children, style }: CardProps) => {

  return (
    <Container style={style} bgColor={lighten(0.05, '#000000')}>
      {children}
    </Container>
  );
};

export default Card;
