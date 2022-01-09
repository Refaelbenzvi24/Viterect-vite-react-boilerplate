import React from 'react';
import type { ReactElementProps as ReactElementProperties } from '../../../types';

export default function (properties: ReactElementProperties) {
  return (
    <span
      {...properties}
      className={`text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400 ${properties.className}`}
    >
      {properties.children}
    </span>
  );
}
