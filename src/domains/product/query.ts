import { queryClient, useQuery } from '@/core/query'
import { makeMapFromArray } from '@/services/utils'

import { Product } from './entity'
import * as Api from './api'

const QUERY_KEY = 'ProductList'

async function getList() {
  const list = await Api.getList()
  return makeData(list)
}

export function useProductListQuery() {
  return useQuery(QUERY_KEY, getList, { staleTime: Infinity })
}

export function invalidateProductListQuery() {
  return queryClient.invalidateQueries(QUERY_KEY)
}

function makeData(list: Product[]) {
  return {
    list,
    map: makeMapFromArray(list),
  }
}
