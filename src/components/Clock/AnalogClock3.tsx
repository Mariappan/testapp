import React from "react";
import { ClockSVGProps } from ".";

export const ClockSVG: React.FC<ClockSVGProps> = (props: ClockSVGProps) => {
    const little: number = ((props.hours * 30) + (props.minutes / 2)) || 0
    const big: number = props.minutes * 6 || 0
    const fast: number = props.seconds * 6 || 0

    const rotatehand = (value: number) => {
        return "rotate(" + value + ",50,50) ";
    }

    const rangeBetween = (start = 0, end: number, step = 1) => {
        const length = Math.floor(Math.abs((end - start) / step)) + 1;
        return Array.from(Array(length), (x, index) => start + index * step);
    }
    const MinuteMaid = (props: any) => {
        const { radius, angle } = props;
        const radian = angle * 0.0174532925;
        const thickness = angle % 5 ? 0.75 : 2;
        const x = (radius * Math.cos(radian)) + radius;
        const y = (radius * Math.sin(radian)) + radius;
        return <circle cx={x} cy={y} r={thickness} />
    }
    const NumberText = (props: any) => {
        const translation = () => "translate(" + props.x + " " + props.y + ")";
        return (
            <text transform={translation()}>
                <tspan x="0" y="0" fontFamily="'ComicSansMS-Bold'" fontSize="20">{props.text}</tspan>
            </text>
        );
    };
    const oneMinute = 360 / 60;
    var oneMinuteRange = rangeBetween(0, 360, oneMinute);
    return (
        <svg viewBox="0 0 240 240" height="240px">
            <defs>
                <radialGradient id="clockBase" cx="50%" cy="50%" r="50%" spreadMethod="pad">
                    <stop offset="0%" stopColor="steelblue" stopOpacity="1" />
                    <stop offset="30%" stopColor="skyblue" stopOpacity="1" />
                    <stop offset="45%" stopColor="powderblue" stopOpacity="1" />
                    <stop offset="60%" stopColor="skyblue" stopOpacity="1" />
                    <stop offset="100%" stopColor="steelblue" stopOpacity="1" />
                </radialGradient>
                <radialGradient id="clockOuter" cx="50%" cy="50%" r="50%" spreadMethod="pad">
                    <stop offset="90%" stopColor="steelblue" stopOpacity="1" />
                    <stop offset="95%" stopColor="steelblue" stopOpacity="1" />
                    <stop offset="100%" stopColor="Black" stopOpacity="1" />
                </radialGradient>
                <symbol id="clockDots" viewBox="-10 -10 220 220">
                    {oneMinuteRange.map(value =>
                        <MinuteMaid radius={100} angle={value} key={value}/>
                    )}
                </symbol>
                <symbol id="clockNumbers" >
                    <NumberText x="190" y="125" text="3" />
                    <NumberText x="115" y="200" text="6" />
                    <NumberText x="40" y="125" text="9" />
                    <NumberText x="110" y="54" text="12" />
                    <text transform="translate(107, 85)" stroke="darkslategray" fill="darkslategray">
                        <tspan x="0" y="0" fontFamily="'ComicSansMS'" fontSize="10">Ajanta</tspan>
                    </text>
                </symbol>
                {/* Line Border rounded by strokeLinecap */}
                <symbol id="clockHands" viewBox="0 0 100 100" strokeLinecap="round">
                    <line x1="50" y1="50" x2="50" y2="30" transform={rotatehand(little)} strokeWidth="2" />
                    <line x1="50" y1="50" x2="50" y2="15" transform={rotatehand(big)} strokeWidth="1.5"/>
                    <line x1="50" y1="58" x2="50" y2="15" transform={rotatehand(fast)} strokeWidth="0.75" stroke="firebrick" />
                    <circle cx="50" cy="50" r="2" strokeWidth="1" fill="url(#clockBase)" />
                </symbol>
            </defs>
            <circle cx="120" cy="120" r="110" stroke="url(#clockOuter)" fill="url(#clockBase)" strokeWidth="10" />
            <use href="#clockDots" x="20" y="20" width="200px" height="200px" fill="darkslategray" />
            <use href="#clockNumbers" stroke="darkslategray" fill="darkslategray" />
            <use href="#clockHands" stroke="darkslategray" width="240" height="240" />
        </svg>
    )
}
