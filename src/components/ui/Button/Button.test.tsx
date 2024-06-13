import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider
import Button from './Button';
import { darkTheme } from '../../../theme'; // Import your theme

test('renders button with correct text', () => {
    const { getByText } = render(
        <ThemeProvider theme={darkTheme}> {/* Provide the theme */}
            <Button>Click Me</Button>
        </ThemeProvider>
    );
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
});

test('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
        <ThemeProvider theme={darkTheme}> {/* Provide the theme */}
            <Button onClick={onClickMock}>Click Me</Button>
        </ThemeProvider>
    );
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
});