import type { ReactElement } from 'react';
import React from 'react';

import './styles/NavBar.css';

interface ButtonProps { children: ReactElement | string }

export default function ({ children }: ButtonProps) {
  return <button className={style}>{children}</button>;
}

const style = 'rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 '
    + 'block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent '
    + 'dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900'
    + 'focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline';

// const styleSelected = "block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200" +
//     "rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600" +
//     "dark:focus:text-white dark:hover:text-white dark:text-gray-200" +
//     "hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200" +
//     "focus:outline-none focus:shadow-outline"
