import React from 'react';
import svgSprite from '../../assets/images/svgsprite.svg';

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (

    <svg width={props.width || "97"} height={props.height || "59"} viewBox={props.height || "0 0 121 121"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${svgSprite}#${props.iconId}`} />
    </svg>
  );
};
