import React, {ReactElement} from 'react';
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

interface ReactQueryProps {
    children: ReactElement
    client?: QueryClient
}

export default function (props: ReactQueryProps) {
    return (
            <QueryClientProvider client={queryClient}>
                {props.children}
                <ReactQueryDevtools/>
            </QueryClientProvider>
    );
}
