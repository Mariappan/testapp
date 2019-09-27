import React from "react";
import { ClockSVGProps } from ".";

export const ClockSVG: React.FC<ClockSVGProps> = (props: ClockSVGProps) => {
    const { hours, minutes, seconds } = props;
    const fixTime = (t: number) => String(t).padStart(2, '0');

    const Circle = (props: any) => {
        const {radius, angle} = props;
        const radian = angle * 0.0174532925;
        const x = radius * Math.cos(radian) + radius;
        const y = radius * Math.sin(radian) + radius;
        console.log("Drawing Circle for ", angle, x, y);
        return <circle cx={x} cy={y} r="3"/>
    }
    const Dots = () => {
        var angles = []
        for (var i = 0; i <= 360; i=i+30) {
            angles.push(i);
        }
        return <> {angles.map((value, index) => {
            return <Circle radius={100} angle={value}/>
          })}</>;
    }
    // return <div>Time is {fixTime(hours)}:{fixTime(minutes)}:{fixTime(seconds)}</div>
    return (
        <svg viewBox="0 0 240 240" height="220px">
            <rect x="0" y="0" width="240" height="240" fill="none" stroke="blue" />
            <circle cx="120" cy="120" r="120" fill="green" stroke="black" stroke-width="1" />
            <symbol id="clockNum" viewBox="0 0 200 200" fill="black" stroke="black" stroke-width="3" >
                {/* <rect x="0" y="0" width="200" height="200" stroke-width="1"/> */}
                <Dots/>
            </symbol>
            <use href="#clockNum" y="10" height="220" />
        </svg>
    )
}
