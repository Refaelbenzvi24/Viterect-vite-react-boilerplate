import React from "react";
import {ReactElementProps} from "../types";
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient()

export default (props: ReactElementProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
            <ReactQueryDevtools initialIsOpen={false} position={"top-right"}/>
        </QueryClientProvider>
    )
}
