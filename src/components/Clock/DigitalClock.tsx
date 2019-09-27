import React from "react";
import { ClockSVGProps } from ".";

export const ClockSVG: React.FC<ClockSVGProps> = (props: ClockSVGProps) => {
    // const { hours, minutes, seconds } = props;
    // const fixTime = (t: number) => String(t).padStart(2, '0');

    const Circle = (props: any) => {
        const {radius, angle, temp=3} = props;
        const radian = angle * 0.0174532925;
        const x = radius * Math.cos(radian) + radius;
        const y = radius * Math.sin(radian) + radius;
        // console.log("Drawing Circle for ", angle, x, y);
        return <circle cx={x} cy={y} r={temp}/>
    }
    const rangeBetween = (start = 0, end: number, step = 1) => {
        const length = Math.floor(Math.abs((end - start) / step)) + 1;
        return Array.from(Array(length), (x, index) => start + index * step);
    }
    const Dots = (props: any) => {
        const {num, thickness=3} = props;
        var angles = rangeBetween(0, 360, num);
        return <> {angles.map(value => <Circle radius={100} angle={value} temp={thickness}/>)}</>;
    }
    // return <div>Time is {fixTime(hours)}:{fixTime(minutes)}:{fixTime(seconds)}</div>
    return (
        <svg viewBox="0 0 240 240" height="240px">
            {/* <rect x="0" y="0" width="240" height="240" fill="none" stroke="blue" /> */}
            <circle cx="120" cy="120" r="110" fill="green" stroke="black" stroke-width="1" />
            <symbol viewBox="-10 -10 220 220" id="clockNum" fill="black" stroke="black" stroke-width="2" >
                <Dots num={30}/>
            </symbol>
            <symbol viewBox="-10 -10 220 220" id="clockNum1" fill="none" stroke="black" stroke-width="1" >
                <Dots num={6} thickness={1}/>
            </symbol>
            <use href="#clockNum" y="20" height="200px" />
            <use href="#clockNum1" y="20" height="200px" />
        </svg>
    )
}
