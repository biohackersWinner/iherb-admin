import { Button } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'

import { FieldArray } from '@/ui/Form'
import { FormInput } from '@/ui/FormInput'
import { FormTextArea } from '@/ui/FormTextarea'
import * as CS from '@/ui/common'

import * as S from './styles'
import { ProductList } from './ProductList'

export function StepList() {
  return (
    <div>
      Шаги
      <CS.Spacer height={8} />
      <FieldArray name="steps">
        {({ fields }) => {
          const isLastFieldNotEmpty = !!fields.value[fields.value.length - 1]

          return (
            <>
              {fields.map((fieldName, fieldIndex) => (
                <S.Step key={fieldIndex}>
                  <S.StepRow>
                    <S.StepLabel>Название</S.StepLabel>
                    <S.StepValue>
                      <FormInput name={`${fieldName}.name`} />
                    </S.StepValue>
                  </S.StepRow>
                  <S.StepRow>
                    <S.StepLabel>Описание</S.StepLabel>
                    <S.StepValue>
                      <FormTextArea name={`${fieldName}.description`} />
                    </S.StepValue>
                  </S.StepRow>
                  <ProductList name={`${fieldName}.products`} />

                  {fields.length && fields.length > 1 && (
                    <S.RemoveStep>
                      <Button onClick={() => fields.remove(fieldIndex)}>
                        <DeleteOutlined />
                        Удалить шаг
                      </Button>
                    </S.RemoveStep>
                  )}
                </S.Step>
              ))}

              {isLastFieldNotEmpty && (
                <S.Add>
                  <Button
                    onClick={() =>
                      fields.push({
                        name: undefined,
                        products: [undefined],
                      })
                    }
                  >
                    <PlusOutlined />
                    Добавить шаг
                  </Button>
                </S.Add>
              )}
            </>
          )
        }}
      </FieldArray>
    </div>
  )
}
