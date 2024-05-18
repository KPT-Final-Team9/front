'use client';
import React from 'react';
import * as LocalIcons from '@/asset/Icons';

/* add more icons! */

interface LocalIconProps {
  name: keyof typeof LocalIcons;
  width?: number;
  height?: number;
  [key: string]: any;
}

/**
 *  Icon 컴포넌트
 * @param {name}: asset/Icons/index 에서 export된 svg 컴포넌트
 * @returns SelectedIcon
 */
export function LocalIcon({ width = 16, height = 16, name, ...props }: LocalIconProps) {
  const SelectedIcon = LocalIcons[name];
  console.log(SelectedIcon);
  if (!SelectedIcon) {
    return null;
  }

  return (
    <SelectedIcon
      width={width}
      height={height}
      {...props}
    />
  );
}
