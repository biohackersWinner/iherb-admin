import { Table, ColumnProps } from '@/ui/Table'

import { Product } from './entity'
import { useProductListQuery } from './query'

const columns: ColumnProps<Product>[] = [
  {
    title: 'Название',
    dataIndex: 'displayName',
    key: 'name',
  },
  {
    title: 'Артикул',
    dataIndex: 'partNumber',
    key: 'partNumber',
  },
  {
    title: 'Цена',
    dataIndex: 'listPrice',
    key: 'listPrice',
  },
  {
    title: 'Бренд',
    dataIndex: 'brandCode',
    key: 'brandCode',
  },
]

export function ProductTable() {
  const productListQuery = useProductListQuery()

  const { data, isLoading } = productListQuery

  return (
    <Table<Product>
      dataSource={data?.list}
      columns={columns}
      loading={isLoading}
      size="middle"
      rowKey="productId"
      pagination={false}
    />
  )
}
