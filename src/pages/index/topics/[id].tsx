import type React from 'react';
import { useParams } from 'react-router-dom';
import type { RouteConfigComponentProps } from 'react-router-config';

interface Parameters_ { id: string }

const page: React.FC<RouteConfigComponentProps> = () => {
  const { id }: Parameters_ = useParams();

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default page;
