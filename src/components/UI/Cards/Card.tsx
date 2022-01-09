import type { ReactElementProps as ReactElementProperties } from '../../../types';

export default function (properties: ReactElementProperties) {
  return (
    <div
      {...properties}
      className={'right-0 w-full origin-top-right rounded-md shadow-lg p-2 overflow-hidden '
		     + `bg-white dark:bg-dark-300 rounded-md shadow dark-mode:bg-gray-800  ${properties.className}`}
    >
      {properties.children}
    </div>
  );
}
