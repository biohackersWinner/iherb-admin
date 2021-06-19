import { Field } from 'react-final-form'
import Input, { TextAreaProps } from 'antd/lib/input'
import styled from '@emotion/styled'

import * as CS from './common'

const FormInputWrapper = styled.div`
  position: relative;
`

interface Props extends TextAreaProps {
  name: string
  errorAbsolute?: boolean
}

export function FormTextArea(props: Props) {
  const { name, errorAbsolute, ...otherProps } = props

  return (
    <Field name={name}>
      {({ input, meta }) => {
        const { touched, error, submitError } = meta
        const valid = !(touched && error) && !submitError
        const errorText = valid ? null : submitError || error

        return (
          <FormInputWrapper className={valid ? '' : 'has-error'}>
            <Input.TextArea {...input} {...otherProps} />

            {errorText && (
              <CS.Error absolute={errorAbsolute}>{errorText}</CS.Error>
            )}
          </FormInputWrapper>
        )
      }}
    </Field>
  )
}
