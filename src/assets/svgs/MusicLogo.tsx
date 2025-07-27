import React from "react"
import Svg, { G, Circle, Path, Text as SvgText } from "react-native-svg"

interface MusicLogoProps {
  width?: number | string
  height?: number | string
}

const MusicLogo: React.FC<MusicLogoProps> = ({
  width = 94,
  height = 57,
}) => (
  <Svg width={width} height={height} viewBox="0 0 222 35">
    <G transform="translate(-87 -467)">
      <G transform="translate(161 467)">
        <Circle cx="4.742" cy="4.742" r="4.742" transform="translate(0 9.543)" fill="#fff" />
        <Path
          d="M51.064,51.811,66.437,60.7a4.66,4.66,0,0,1,0,8.075l-15.373,8.89A4.644,4.644,0,0,1,44.1,73.63V55.849A4.632,4.632,0,0,1,51.064,51.811Z"
          transform="translate(-24.932 -27.586)"
          fill="#fff"
        />
        <Path
          d="M11.137,31.015a5.373,5.373,0,0,0-5.3-5.477A5.408,5.408,0,0,0,.5,31.015v35.6c0,5.563,2.194,10.055,6,12.323a10.655,10.655,0,0,0,5.588,1.5,15.328,15.328,0,0,0,7.74-2.311l48.3-28.84a13.511,13.511,0,0,0,.041-23.021L26.492,1.191A5.184,5.184,0,0,0,19.249,3.16a5.558,5.558,0,0,0,1.9,7.488L48.1,26.865a13.412,13.412,0,0,1,5.463,10.911,13.243,13.243,0,0,1-4.884,10.441L29.1,59.9a12.463,12.463,0,0,1-11.63-.642A13.081,13.081,0,0,1,11.137,48Z"
          transform="translate(-0.5 -0.437)"
          fill="#fff"
        />
      </G>
    </G>
  </Svg>
)

export default MusicLogo
