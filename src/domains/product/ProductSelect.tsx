import { FormSelect } from '@/ui/FormSelect'

import { useProductListQuery } from './query'
import { Product } from '@/domains/product/entity'

type Props = {
  name: string
}

export function ProductSelect(props: Props) {
  const { name } = props

  const productListQuery = useProductListQuery()

  const { data, isLoading } = productListQuery

  if (!data) {
    return null
  }

  const options = makeOptions(data.list)

  return <FormSelect name={name} options={options} />
}

function makeOptions(data: Product[]) {
  return data.map((el) => ({
    label: `${el.partNumber} / ${el.displayName}`,
    value: String(el.productId),
  }))
}
