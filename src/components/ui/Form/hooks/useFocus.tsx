import { useState, useRef, useCallback } from 'react'

type RefType<T extends HTMLElement> = React.MutableRefObject<T | null>;

type valueType = string | number | readonly string[] | undefined

const useFocus = <T extends HTMLElement>(value: valueType) => {
    const [isFocused, setFocused] = useState(false);
    const ref = useRef<T>(null);

    const handleClick = useCallback(() => {
        setFocused(true);
        if (ref.current != null) {
            ref.current.focus();
        }
    }, [ref.current]);

    const handleBlur = useCallback(() => {
        if (value == null || value == '') {
            setFocused(false);
        }
    }, [setFocused, value]);

    return {
        isFocused,
        ref: ref as RefType<T>,
        handleClick,
        handleBlur,
    }
}

export default useFocus;