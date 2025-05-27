import { useMemo } from "react";

function RandomTime() {
    const randomTime = useMemo(() => {
        const hourMax = 22;
        const hourMin = 8;

        return Math.floor(Math.random() * (hourMax - hourMin + 1)) + hourMin;
    }, []);

    return <option value={randomTime}>{randomTime}:00</option>;
}

export default RandomTime;