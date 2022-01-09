import type { ReactElementProps as ReactElementProperties } from '../../../types';

export default function (properties: ReactElementProperties) {
  return (
    <div {...properties} className={`h-0 mx-4 my-2 border border-solid border-blueGray-100 ${properties.className}`} />
  );
}
