import { useState } from "react"

const useHamburger = () => {
    const [isOpen, setOpen] = useState(false)

    const open = () => setOpen(true)

    const close = () => setOpen(false)

    return {
        isOpen,
        open,
        close,
    }
}

export default useHamburger