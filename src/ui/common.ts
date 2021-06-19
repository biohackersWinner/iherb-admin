import styled from '@emotion/styled'

export const FormRow = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

type FormLabelProps = {
  width?: string
  align?: 'right' | 'left'
}
export const FormLabel = styled.div<FormLabelProps>`
  text-align: ${(p) => p.align || 'left'};
  padding-right: 8px;
  width: ${(p) => p.width || '150px'};
`

export const FormValue = styled.div`
  flex-grow: 1;
`

export const Error = styled.div<{ absolute?: boolean }>`
  min-height: 16px;
  color: red;
  position: ${(p) => (p.absolute ? 'absolute' : 'static')};
`

type SpacerProps = {
  width?: number
  height?: number
  inline?: boolean
}

export const Spacer = styled.div<SpacerProps>`
  display: ${(p) => (p.inline ? 'inline-block' : 'block')};
  width: ${(p) => `${p.width || 0}px`};
  height: ${(p) => `${p.height || 0}px`};
`

type FlexProps = {
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-wrap: ${(p) => p.wrap || 'nowrap'};
  justify-content: ${(p) => p.justifyContent || 'flex-start'};
  align-items: ${(p) => p.alignItems || 'center'};
`

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  //justify-content: space-between;

  h1 {
    margin-bottom: 0;
    font-size: 28px;
  }
`
