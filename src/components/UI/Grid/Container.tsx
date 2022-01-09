import type { ReactElementProps as ReactElementProperties } from '../../../types';

export default function (properties: ReactElementProperties) {
  return (
    <div {...properties} className={`flex mx-auto ${properties.className ? properties.className : ''}`}>
      {properties.children}
    </div>
  );
}
