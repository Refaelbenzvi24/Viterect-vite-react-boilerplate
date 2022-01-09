import type { ReactNode } from 'react';
import type React from 'react';

interface IconButtonProperties extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export default function (properties: IconButtonProperties) {
  return (
    <div {...properties}>
      <div className="
		    flex
            cursor-pointer
            text-xl
            opacity-80
            text-true-dark-200
            dark:text-white
            hover:text-gray-700
            dark:hover:text-gray-100
            active:text-gray-500
            dark:active:text-gray-300
            hover:opacity-100
            active:opacity-70
            "
      >
        {properties.children}
      </div>
    </div>
  );
}
