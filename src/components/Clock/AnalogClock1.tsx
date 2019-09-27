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
      <g clip-path="url(#_clipPath_IAv25CjndUvOTDrZhLzZ3EkaVHrkuZNf)">
        <circle vector-effect="non-scaling-stroke" cx="79.99999999999999" cy="79.99999999999999" r="70" fill="rgb(49,101,128)" stroke-width="1" stroke="rgb(0,0,0)" stroke-opacity="0.75" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        <circle vector-effect="non-scaling-stroke" cx="80" cy="80" r="1" fill="none" stroke-width="1" stroke="rgb(202,233,246)" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="3" />
        <line x1="80" y1="80" x2="80" y2="20" transform={rotatehand(fast)} vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(218,240,253)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        <line x1="80" y1="80" x2="80" y2="20" transform={rotatehand(big)} vector-effect="non-scaling-stroke" stroke-width="2" stroke="rgb(218,240,253)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        <line x1="80" y1="40" x2="80" y2="80" transform={rotatehand(little)} vector-effect="non-scaling-stroke" stroke-width="2" stroke="rgb(202,233,246)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
      </g>
    </svg>
  )
}