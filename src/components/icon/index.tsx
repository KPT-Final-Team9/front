'use client';
import React from 'react';
import * as LocalIcons from '@/asset/Icons';

/* add more icons! */

interface LocalIconProps {
  name: keyof typeof LocalIcons;
  width?: number;
  height?: number;
  color?: string;
  [key: string]: any;
}

/**
 *  Icon 컴포넌트
 * @param {name}: asset/Icons/index 에서 export된 svg 컴포넌트
 * @returns SelectedIcon
 */
export function LocalIcon({ width = 16, height = 16, color, name, ...props }: LocalIconProps) {
  const SelectedIcon = LocalIcons[name];
  if (!SelectedIcon) {
    return null;
  }

  // fill={color}와 같이 사용할 경우, color가 빈 값일 때 svg 기존의 fill을 undefined로 만들면서 색이 없어짐.
  // color 유무에 따라 fill key 값 자체가 없어지도록하기 위해 아래와 같이 props를 넘겨줌.
  const iconProps = color ? { width, height, fill: color, ...props } : { width, height, ...props };

  return <SelectedIcon {...iconProps} />;
}
