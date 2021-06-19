import { ReactNode } from 'react'

export { FORM_ERROR } from 'final-form'
export type { FormApi } from 'final-form'

export { Field, Form, FormSpy, withTypes } from 'react-final-form'
export { FieldArray } from 'react-final-form-arrays'

export { default as arrayMutators } from 'final-form-arrays'
// export { default as createCalculate } from 'final-form-calculate';

export type FormErrors<FormValues> = Partial<Record<keyof FormValues, string>>

import * as CS from '@/ui/common'

type Props = {
  label?: string
  value: ReactNode
  labelWidth?: string
  align?: 'left' | 'right'
}

export function FormItem(props: Props) {
  const { label, value, labelWidth, align } = props

  return (
    <CS.FormRow>
      <CS.FormLabel width={labelWidth} align={align}>
        {label}
      </CS.FormLabel>
      <CS.FormValue>{value}</CS.FormValue>
    </CS.FormRow>
  )
}
