import {
    QueryClientProvider,
} from '@tanstack/react-query'

import { queryClient } from '../lib/queryClient'


export const TanstackProvider = ({ children }) => {
    return <>
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    </>
}

