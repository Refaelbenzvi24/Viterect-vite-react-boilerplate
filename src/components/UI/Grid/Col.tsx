import type { ReactElementProps as ReactElementProperties } from '../../../types';

export default function (properties: ReactElementProperties) {
  return (
    <div {...properties} className={`flex flex-col ${properties.className ? properties.className : ''}`}>
      {properties.children}
    </div>
  );
}
