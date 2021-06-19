import { Button } from 'antd'

import { ProductTable } from '@/domains/product'

export default function ProductPage() {
  return (
    <div>
      <h1>Каталог продукции</h1>

      <ProductTable />
    </div>
  )
}
