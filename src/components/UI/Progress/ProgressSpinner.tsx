import { ImpulseSpinner } from 'react-spinners-kit';
import type { ReactElementProps as ReactElementProperties } from '../../../types';

export default function (properties: ReactElementProperties) {
  return (
    <div className="relative h-full">
      <div {...properties} className={`absolute top-[50%] left-[50%] ${properties.className}`}>
        <ImpulseSpinner size={75} backColor="#626262" frontColor="#536473" />
      </div>
    </div>
  );
}
