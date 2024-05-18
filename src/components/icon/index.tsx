'use client';
import React from 'react';
import * as LocalIcons from '@/asset/Icons';

/* add more icons! */

interface LocalIconProps {
  name: keyof typeof LocalIcons;
  [key: string]: any;
}

/**
 *  Icon 컴포넌트
 * @param {name}: asset/Icons/index 에서 export된 svg 컴포넌트
 * @returns SelectedIcon
 */
export function LocalIcon({ name, ...props }: LocalIconProps) {
  const SelectedIcon = LocalIcons[name];

  if (!SelectedIcon) {
    return null;
  }

  return <SelectedIcon {...props} />;
}
