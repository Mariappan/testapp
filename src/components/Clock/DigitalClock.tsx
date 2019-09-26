import React from "react";
import { ClockSVGProps } from ".";

export const ClockSVG: React.FC<ClockSVGProps> = (props: ClockSVGProps) => {
    const { hours, minutes, seconds } = props;
    const fixTime = (t: number) => String(t).padStart(2, '0');
    return <div>Time is {fixTime(hours)}:{fixTime(minutes)}:{fixTime(seconds)}</div>
}
