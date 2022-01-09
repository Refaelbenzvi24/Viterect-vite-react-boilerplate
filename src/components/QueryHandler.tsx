import type { QueryStatus } from 'react-query';
import type { ReactElement } from 'react';
import React from 'react';
import ProgressSpinner from './UI/Progress/ProgressSpinner';

interface QueryHandlerProperties {
  children: ReactElement;
  status: QueryStatus;
}

export default function ({ children, status }: QueryHandlerProperties) {
  return (
    <>
      {status === 'loading' && (
      <ProgressSpinner />
		  )}

      {status === 'error' && (
      <>Error occurred while getting the data!</>
		  )}

      {status === 'success' && (
      <>{children}</>
		  )}
    </>
  );
}
