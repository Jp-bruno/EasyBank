import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        window.onresize = () => {
            // setWindowSize(window.outerWidth)
            setWindowSize(window.innerWidth)
        }
        
    }, [])

    return windowSize
}