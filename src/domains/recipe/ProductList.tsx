import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'

import { Form, FieldArray, arrayMutators } from '@/ui/Form'
import { FormInput } from '@/ui/FormInput'
import { FormTextArea } from '@/ui/FormTextarea'
import { FormItem } from '@/ui/Form'

import { ProductSelect } from '@/domains/product'

import * as S from './styles'
import { Button } from 'antd'

type Props = {
  name: string
}

export function ProductList(props: Props) {
  const { name } = props

  return (
    <S.ProductList>
      <S.StepLabel>Продукты</S.StepLabel>

      <S.StepValue>
        <FieldArray
          name={name}
          // subscription={{ submitting: true, value: true }}
        >
          {({ fields }) => {
            const isLastFieldNotEmpty = !!fields.value[fields.value.length - 1]

            return (
              <>
                {fields.map((fieldName, fieldIndex) => (
                  <S.ProductItem key={fieldIndex}>
                    <FormItem
                      label="Продукт"
                      value={<ProductSelect name={`${fieldName}.productId`} />}
                    />
                    <FormItem
                      label="Описание"
                      value={<FormTextArea name={`${fieldName}.description`} />}
                    />
                    <FormItem
                      label="Кол-во"
                      value={
                        <S.Qty>
                          <FormInput name={`${fieldName}.qty`} />
                        </S.Qty>
                      }
                    />

                    {fields.length && fields.length > 1 && (
                      <FormItem
                        label=""
                        value={
                          <Button onClick={() => fields.remove(fieldIndex)}>
                            <DeleteOutlined />
                            Удалить продукт
                          </Button>
                        }
                      />
                    )}
                  </S.ProductItem>
                ))}

                {isLastFieldNotEmpty && (
                  <S.Add>
                    <Button onClick={() => fields.push(undefined)}>
                      <PlusOutlined />
                      Добавить продукт
                    </Button>
                  </S.Add>
                )}
              </>
            )
          }}
        </FieldArray>
      </S.StepValue>
    </S.ProductList>
  )
}
