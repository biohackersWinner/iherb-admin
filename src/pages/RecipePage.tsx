import { useParams, useHistory } from 'react-router-dom'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { RecipeTable, RecipeDrawer, Recipe } from '@/domains/recipe'

import * as CS from '@/ui/common'

type RouteParams = {
  recipeId?: string
}

export default function RecipePage() {
  const { recipeId } = useParams<RouteParams>()
  const history = useHistory()

  function openCreation() {
    history.push(`/recipes/new`)
  }

  function openEditing(rec: Recipe) {
    history.push(`/recipes/${rec.id}`)
  }

  function close() {
    history.push('/recipes/')
  }

  return (
    <div>
      <CS.PageHeader>
        <h1>Схемы</h1>
        <CS.Spacer width={20} />
        <Button onClick={openCreation} icon={<PlusOutlined />}>
          Добавить
        </Button>
      </CS.PageHeader>

      <RecipeTable onRowClick={openEditing} />

      <RecipeDrawer
        isVisible={!!recipeId}
        onClose={close}
        recipeId={recipeId}
      />
    </div>
  )
}
