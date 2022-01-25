import React from 'react';
import type {ReactElementProps} from 'types';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

const MAX_RETRIES = 2
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Number.POSITIVE_INFINITY,
            retry:     MAX_RETRIES
        }
    }
})

export default function (props: ReactElementProps) {
    return (
            <QueryClientProvider client={queryClient}>
                {props.children}
                <ReactQueryDevtools/>
            </QueryClientProvider>
    );
}
