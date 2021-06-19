import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import { Select } from 'antd'
import { SelectProps } from 'antd/lib/select'

import * as CS from './common'

const { Option } = Select

const FormSelectWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;

  .ant-select-selection-item {
    width: 100px;
  }
`

interface Props extends SelectProps<any> {
  name: string
  options: {
    value: string
    label: string
  }[]
}

export function FormSelect(props: Props) {
  const { name, options, ...otherProps } = props

  return (
    <Field name={name}>
      {({
        input: { onBlur, ...restInput },
        meta: { error, submitError, touched },
      }) => {
        const valid = !(touched && error) && !submitError
        const errorText = valid ? null : submitError || error

        return (
          <FormSelectWrapper>
            <Select
              style={{ width: '100%', maxWidth: '100%' }}
              {...restInput}
              {...otherProps}
            >
              {options.map((el) => (
                <Option key={el.value} value={el.value}>
                  {el.label}
                </Option>
              ))}
            </Select>
            {errorText && <CS.Error>{errorText}</CS.Error>}
          </FormSelectWrapper>
        )
      }}
    </Field>
  )
}
