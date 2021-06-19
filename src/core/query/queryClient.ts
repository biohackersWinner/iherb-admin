import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: 5 * 60 * 1000,
      keepPreviousData: false,
      refetchOnMount: true,
      retry: false,
    },
  },
})
