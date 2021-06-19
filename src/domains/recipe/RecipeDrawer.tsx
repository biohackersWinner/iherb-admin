import { Drawer } from 'antd'

import { RecipeForm } from './RecipeForm'

type Props = {
  recipeId?: string
  isVisible: boolean
  onClose: () => void
}

export function RecipeDrawer(props: Props) {
  const { recipeId, isVisible, onClose } = props

  return (
    <Drawer
      title={`${recipeId === 'new' ? 'Создание' : 'Редактирование'} схемы`}
      visible={isVisible}
      // maskClosable={false}
      width={1000}
      onClose={onClose}
    >
      {isVisible && <RecipeForm recipeId={recipeId} close={onClose} />}
    </Drawer>
  )
}
