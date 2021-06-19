import { Field } from 'react-final-form'
import Input, { InputProps } from 'antd/lib/input'
import styled from '@emotion/styled'

import * as CS from './common'

const FormInputWrapper = styled.div`
  position: relative;
`

interface Props extends InputProps {
  name: string
  errorAbsolute?: boolean
  format?: (value: any, name: string) => any
  parse?: (value: any, name: string) => any
  type?: 'text' | 'password' | 'textarea'
}

export function FormInput(props: Props) {
  const {
    name,
    format,
    parse,
    errorAbsolute,
    type = 'text',
    ...otherProps
  } = props

  return (
    <Field name={name} format={format} parse={parse}>
      {({ input, meta }) => {
        const { touched, error, submitError } = meta
        const valid = !(touched && error) && !submitError
        const errorText = valid ? null : submitError || error

        return (
          <FormInputWrapper className={valid ? '' : 'has-error'}>
            {type === 'password' ? (
              <Input.Password {...input} {...otherProps} />
            ) : (
              <Input {...input} {...otherProps} />
            )}

            {errorText && (
              <CS.Error absolute={errorAbsolute}>{errorText}</CS.Error>
            )}
          </FormInputWrapper>
        )
      }}
    </Field>
  )
}
