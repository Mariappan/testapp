import React from "react";
import { ClockSVGProps } from ".";

export const ClockSVG: React.FC<ClockSVGProps> = (props: ClockSVGProps) => {
  const little: number = ((props.hours * 30) + (props.minutes / 2)) || 0
  const big: number = props.minutes * 6 || 0
  const fast: number = props.seconds * 6 || 0

  const rotatehand = (value: number) => {
    return "rotate(" + value + ",80,80)";
  }

  const colour = "white";
  const handColour = "Azure";

  return (
    <svg viewBox="0 0 160 160" width="160pt" height="160pt">
      <defs>
        <clipPath id="_clipPath_IAv25CjndUvOTDrZhLzZ3EkaVHrkuZNf">
          <rect width="160" height="160" />
        </clipPath>
        <radialGradient id="clockBase" cx="50%" cy="50%" r="50%" spreadMethod="pad">
          <stop offset="0%" stopColor="black" stopOpacity="1" />
          <stop offset="10%" stopColor="MidnightBlue" stopOpacity="1" />
          <stop offset="25%" stopColor="Navy" stopOpacity="1" />
          <stop offset="50%" stopColor="MidnightBlue" stopOpacity="1" />
          <stop offset="100%" stopColor="black" stopOpacity="1" />
        </radialGradient>
        <symbol id="clockNum" viewBox="0 0 434.869 434.87" fill={colour}>
          <path d="m212.44 401.5v28.53c0 6.448 10 6.448 10 0v-28.53c0-6.448-10-6.448-10 0z" />
          <path d="m121.93 374.6-15.109 24.47c-3.398 5.503 5.254 10.521 8.635 5.047l15.109-24.47c3.398-5.503-5.254-10.522-8.635-5.047z" />
          <path d="m55.506,304.669-24.75,14.748c-5.533,3.297-.506,11.944 5.047,8.635l24.75-14.748c5.532-3.297.506-11.945-5.047-8.635z" />
          <path d="m32.931 212.44h-28.095c-6.449 0-6.449 10 0 10h28.095c6.449 0 6.449-10 0-10z" />
          <path d="m60.913 120.77-25.11-13.952c-5.642-3.135-10.684 5.503-5.047 8.635l25.11 13.952c5.642 3.135 10.684-5.503 5.047-8.635z" />
          <path d="m129.125,54.968-13.671-24.211c-3.17-5.614-11.81-.576-8.635,5.047l13.671,24.211c3.17,5.614 11.809.576 8.635-5.047z" />
          <path d="m222.44 33v-28.163c0-6.449-10-6.449-10 0v28.163c0 6.449 10 6.449 10 0z" />
          <path d="m314.56 60.812 13.494-25.008c3.062-5.674-5.572-10.723-8.635-5.047l-13.494 25.008c-3.062 5.674 5.572 10.723 8.635 5.047z" />
          <path d="m379.36 130.2 24.75-14.749c5.532-3.297 0.507-11.944-5.047-8.635l-24.75 14.749c-5.532 3.297-0.506 11.944 5.047 8.635z" />
          <path d="m401.44 222.44h28.598c6.448 0 6.448-10 0-10h-28.598c-6.449 0-6.449 10 0 10z" />
          <path d="m374.68 314.12 24.39 13.93c5.608 3.203 10.645-5.438 5.047-8.635l-24.39-13.93c-5.609-3.203-10.645 5.438-5.047 8.635z" />
          <path d="m305.206,378.826 14.211,25.288c3.159,5.621 11.798.581 8.635-5.047l-14.211-25.288c-3.159-5.621-11.798-.581-8.635,5.047z" />
          <circle vectorEffect="non-scaling-stroke" cx="217" cy="217" r="10" strokeWidth="1" />
          <switch>
            <text transform="translate(47.955 229.81)">
              <tspan x="0" y="0" fontFamily="'ComicSansMS-Bold'" fontSize="36">9</tspan>
            </text>
          </switch>
          <switch>
            <text transform="translate(196.96 78.807)">
              <tspan x="0" y="0" fontFamily="'ComicSansMS-Bold'" fontSize="36">12</tspan>
            </text>
          </switch>
          <switch>
            <text transform="translate(207.96 385.81)">
              <tspan x="0" y="0" fontFamily="'ComicSansMS-Bold'" fontSize="36">6</tspan>
            </text>
          </switch>
          <switch>
            <text transform="translate(363.96 228.81)">
              <tspan x="0" y="0" fontFamily="'ComicSansMS-Bold'" fontSize="36">3</tspan>
            </text>
          </switch>
        </symbol>
      </defs>
      <g clipPath="url(#_clipPath_IAv25CjndUvOTDrZhLzZ3EkaVHrkuZNf)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3">
        <circle vectorEffect="non-scaling-stroke" cx="80" cy="80" r="70" fill="url(#clockBase)" stroke="black" strokeWidth="15" />
        <svg viewBox="0 0 434.869 434.87" x="10" width="140" >
          <use href="#clockNum" />
        </svg>
        <line x1="80" y1="80" x2="80" y2="30" transform={rotatehand(fast)} vectorEffect="non-scaling-stroke" strokeWidth="1" stroke={handColour} />
        <line x1="80" y1="80" x2="80" y2="30" transform={rotatehand(big)} vectorEffect="non-scaling-stroke" strokeWidth="2" stroke={handColour} />
        <line x1="80" y1="80" x2="80" y2="50" transform={rotatehand(little)} vectorEffect="non-scaling-stroke" strokeWidth="2" stroke={handColour} />
      </g>
    </svg>
  )
}