import { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


const MAX_RETRIES = 2
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry:     MAX_RETRIES,
		},
	},
})

interface ReactQueryProps {
	children: ReactElement;
}

export default (props: ReactQueryProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			{props.children}
			<ReactQueryDevtools/>
		</QueryClientProvider>
	)
}
