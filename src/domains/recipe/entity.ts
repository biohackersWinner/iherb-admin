export type Recipe = {
  id: string
  name: string
  title?: string
  description?: string
  steps: RecipeStep[]
}

type RecipeStep = {
  name: string
  description?: string
  products: {
    productId: string
    description?: string
    qty: string
  }[]
}
