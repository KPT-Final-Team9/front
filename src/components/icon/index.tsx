'use client';
import React from 'react';
import XIconComp from '@/asset/Icons/ic-x.svg';

/* add more icons! */

export function XIcon({ ...prop }) {
  return <XIconComp {...prop} />;
}

export function XIconDark({ ...prop }) {
  return <XIconComp className="fill-white" {...prop} />;
}

