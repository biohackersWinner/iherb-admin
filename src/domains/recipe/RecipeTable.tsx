import { Table, ColumnProps } from '@/ui/Table'

import { Recipe } from './entity'
import { useRecipeListQuery } from './query'

import * as S from './styles'

const columns: ColumnProps<Recipe>[] = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Заголовок',
    dataIndex: 'title',
    key: 'title',
  },
]

type Props = {
  onRowClick: (account: Recipe) => any
}

export function RecipeTable(props: Props) {
  const { onRowClick } = props

  const recipeListQuery = useRecipeListQuery()

  const { data, isLoading } = recipeListQuery

  function onRow(rec: Recipe) {
    return {
      onClick: () => onRowClick(rec),
    }
  }

  return (
    <S.Wrapper>
      <Table<Recipe>
        dataSource={data?.list}
        columns={columns}
        loading={isLoading}
        size="middle"
        rowKey="id"
        pagination={false}
        onRow={onRow}
      />
    </S.Wrapper>
  )
}
