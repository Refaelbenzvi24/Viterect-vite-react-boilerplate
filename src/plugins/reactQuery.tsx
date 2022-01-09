import React from 'react';
import type { ReactElementProps as ReactElementProperties } from '../types';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export default function (properties: ReactElementProperties) {
  return (
    <QueryClientProvider client={queryClient}>
      {properties.children}
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </QueryClientProvider>
  );
}
