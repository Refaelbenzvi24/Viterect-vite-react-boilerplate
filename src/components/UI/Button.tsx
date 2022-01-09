import type { ReactElement } from 'react';
import React from 'react';

import './styles/NavBar.css';

interface ButtonProperties { children: ReactElement | string }

export default function ({ children }: ButtonProperties) {
  return <button className={style}>{children}</button>;
}

const style = 'rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 '
    + 'block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent '
    + 'dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900'
    + 'focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline';

// const styleSelected = "block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200" +
//     "rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600" +
//     "dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200" +
//     "hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200" +
//     "focus:outline-none focus:shadow-outline"
