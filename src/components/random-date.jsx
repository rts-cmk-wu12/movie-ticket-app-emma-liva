import { useMemo } from "react";

function RandomDate() {
    const randomDate = useMemo(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();

        const dayMax = 10;
        const dayMin = 1;

        let targetMonth = currentMonth;
        let targetDay = currentDay + Math.floor(Math.random() * dayMax) + dayMin;

        // Get days in current month
        const daysInMonth = new Date(currentDate.getFullYear(), currentMonth, 0).getDate();

        // If the target day exceeds current month's days, proceed to the next month
        if (targetDay > daysInMonth) {
            targetMonth = currentMonth + 1;
            // Adjust the day to be the difference (If we're 2 days over, it becomes the 2nd of the next month)
            targetDay = targetDay - daysInMonth;

            // If the next month exceeds 12, reset to January (Though we never adress what year it is...)
            if (targetMonth > 12) {
                targetMonth = 1;
            }
        }

        return `${targetDay}/${targetMonth}`;
    }, [])

    return <option value={randomDate}>{randomDate}</option>;
}

export default RandomDate;