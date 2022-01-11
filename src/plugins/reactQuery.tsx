import React from 'react';
import type {ReactElementProps} from 'types';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {vars} from "plugins/vars";

const queryClient = new QueryClient();

export default function (props: ReactElementProps) {
	return (
	  <QueryClientProvider client={queryClient}>
		  {props.children}
		  <ReactQueryDevtools/>
	  </QueryClientProvider>
	);
}

const ReactQueryDevTools = () => {
	if (vars.env === 'development')
		return <ReactQueryDevtools initialIsOpen={false} position="top-right"/>
	else return <></>
}
