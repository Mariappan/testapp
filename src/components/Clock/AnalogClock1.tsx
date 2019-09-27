import React from "react";
import { ClockSVGProps } from ".";

export const ClockSVG: React.FC<ClockSVGProps> = (props: ClockSVGProps) => {
  const little: number = ((props.hours * 30) + (props.minutes / 2)) || 0
  const big: number = props.minutes * 6 || 0
  const fast: number = props.seconds * 6 || 0

  const rotatehand = (value: number) => {
    return "rotate(" + value + ",80,80)";
  }
  return (
    <svg viewBox="0 0 160 160" width="160pt" height="160pt">
      <defs>
        <clipPath id="_clipPath_IAv25CjndUvOTDrZhLzZ3EkaVHrkuZNf">
          <rect width="160" height="160" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_IAv25CjndUvOTDrZhLzZ3EkaVHrkuZNf)">
        <circle vectorEffect="non-scaling-stroke" cx="79.99999999999999" cy="79.99999999999999" r="70" fill="rgb(49,101,128)" strokeWidth="1" stroke="rgb(0,0,0)" strokeOpacity="0.75" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3" />
        <circle vectorEffect="non-scaling-stroke" cx="80" cy="80" r="1" fill="none" strokeWidth="1" stroke="rgb(202,233,246)" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="3" />
        <line x1="80" y1="80" x2="80" y2="20" transform={rotatehand(fast)} vectorEffect="non-scaling-stroke" strokeWidth="1" stroke="rgb(218,240,253)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3" />
        <line x1="80" y1="80" x2="80" y2="20" transform={rotatehand(big)} vectorEffect="non-scaling-stroke" strokeWidth="2" stroke="rgb(218,240,253)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3" />
        <line x1="80" y1="40" x2="80" y2="80" transform={rotatehand(little)} vectorEffect="non-scaling-stroke" strokeWidth="2" stroke="rgb(202,233,246)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3" />
      </g>
    </svg>
  )
}