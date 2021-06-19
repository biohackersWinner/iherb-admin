import { Button } from 'antd'

import { PartialBy } from '@/services/utils'

import { Form, arrayMutators, Field } from '@/ui/Form'
import { FormInput } from '@/ui/FormInput'
import { FormTextArea } from '@/ui/FormTextarea'
import * as CS from '@/ui/common'

import * as S from './styles'
import * as Q from './query'
import { StepList } from './StepList'
import { Recipe } from './entity'

type Props = {
  recipeId?: string
  close?: () => any
}

type Values = PartialBy<Recipe, 'id'> & {
  action: 'create' | 'update' | 'remove'
}

export function RecipeForm(props: Props) {
  const { recipeId, close } = props

  const recipeListQuery = Q.useRecipeListQuery()
  const updateMutation = Q.useUpdateRecipeMutation()
  const removeMutation = Q.useRemoveRecipeMutation()
  const createMutation = Q.useCreateRecipeMutation()

  async function submit(values: Values) {
    const { action, ...rest } = values
    const restValues = rest as Recipe

    if (action === 'remove') {
      await removeMutation.mutate(restValues)
    } else if (action === 'create') {
      await createMutation.mutate(restValues)
    } else {
      await updateMutation.mutate(restValues)
    }

    close?.()
  }

  const { data: recipeListData, isLoading } = recipeListQuery

  if (!recipeListData) {
    return null
  }

  const isNew = recipeId === 'new'
  const recipe = recipeId && !isNew ? recipeListData.map[recipeId] : null

  const initialValues = recipe || {
    name: '',
    steps: [
      {
        name: undefined,
        products: [undefined],
      },
    ],
  }

  return (
    <div>
      <Form
        initialValues={initialValues}
        onSubmit={submit}
        mutators={{ ...arrayMutators }}
        render={({ handleSubmit, form, submitting }) => (
          <form
            onSubmit={async (e) => {
              await handleSubmit(e)
              form.reset()
            }}
          >
            <S.FormRow>
              <S.FormLabel>Название</S.FormLabel>
              <S.FormValue>
                <FormInput name="name" size="large" />
              </S.FormValue>
            </S.FormRow>
            <S.FormRow>
              <S.FormLabel>Заголовок</S.FormLabel>
              <S.FormValue>
                <FormInput name="title" size="large" />
              </S.FormValue>
            </S.FormRow>
            <S.FormRow>
              <S.FormLabel>Описание</S.FormLabel>
              <S.FormValue>
                <FormTextArea name="description" size="large" />
              </S.FormValue>
            </S.FormRow>
            <CS.Spacer height={20} />

            <StepList />

            <Field name="action" subscription={{ value: true }}>
              {({ input: { value } }) => (
                <S.Buttons>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={submitting}
                    loading={value !== 'remove' && submitting}
                    size="large"
                    onClick={() => {
                      form.change('action', isNew ? 'create' : 'update')
                    }}
                  >
                    Сохранить
                  </Button>

                  <CS.Spacer width={20} inline />

                  {!isNew && (
                    <Button
                      danger
                      disabled={submitting}
                      htmlType="button"
                      loading={value === 'remove' && submitting}
                      size="large"
                      onClick={() => {
                        form.change('action', 'remove')
                        handleSubmit()
                      }}
                    >
                      Удалить
                    </Button>
                  )}

                  <CS.Spacer width={20} inline />

                  <Button
                    size="large"
                    onClick={() => {
                      form.reset()
                      close?.()
                    }}
                  >
                    Отмена
                  </Button>
                </S.Buttons>
              )}
            </Field>
          </form>
        )}
      />
    </div>
  )
}
