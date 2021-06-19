import { sleep } from '@/services/utils'

import { recipeListMock } from './mocks'
import { Recipe } from './entity'

export async function getList() {
  await sleep()
  return recipeListMock
}

export async function create(newRecipe: Recipe): Promise<any> {
  await sleep()

  return null
}

export async function update(recipe: Recipe): Promise<any> {
  await sleep()

  return null
}

export async function remove(id: string): Promise<any> {
  await sleep()

  return null
}
