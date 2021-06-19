import { queryClient, useQuery, useMutation } from '@/core/query'
import { makeMapFromArray } from '@/services/utils'

import { Recipe } from './entity'
import * as Api from './api'

const QUERY_KEY = 'RecipeList'

async function getList() {
  const list = await Api.getList()
  return makeData(list)
}

export function useRecipeListQuery() {
  return useQuery(QUERY_KEY, getList, { staleTime: Infinity })
}

export function invalidateRecipeListQuery() {
  return queryClient.invalidateQueries(QUERY_KEY)
}

export function useCreateRecipeMutation() {
  return useMutation((item: Recipe) => Api.create(item), {
    onMutate: async (item: Recipe) => {
      queryClient.setQueryData(QUERY_KEY, (old: Data | undefined) => {
        const newList = old ? [...old.list, item] : [item]
        return makeData(newList)
      })
    },
  })
}

export function useUpdateRecipeMutation() {
  return useMutation((item: Recipe) => Api.update(item), {
    onMutate: async (item: Recipe) => {
      queryClient.setQueryData(QUERY_KEY, (old: Data | undefined) => {
        const newList = old!.list.map((el) => (el.id === item.id ? item : el))
        return makeData(newList)
      })
    },
  })
}

export function useRemoveRecipeMutation() {
  return useMutation((item: Recipe) => Api.remove(item.id), {
    onMutate: async (item: Recipe) => {
      queryClient.setQueryData(QUERY_KEY, (old: Data | undefined) => {
        // todo side effects
        const newList = old!.list.filter((el) => el.id !== item.id)
        return makeData(newList)
      })
    },
  })
}

type Data = ReturnType<typeof makeData>

function makeData(list: Recipe[]) {
  return {
    list,
    map: makeMapFromArray(list),
  }
}
