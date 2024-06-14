import styled from 'styled-components'
import Button from './Button'

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

const Hamburger = () => {

    return (
        <HamburgerButton>
            
        </HamburgerButton>
    )
}

export default Hamburger