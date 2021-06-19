import { ReactNode } from 'react'
import { CacheProvider, Global, css } from '@emotion/react'
import createCache from '@emotion/cache'

const cache = createCache({
  key: 'iherb',
})

const globalStyles = css`
  body {
    margin: 0;
  }
`

type Props = {
  children: ReactNode
}

export function StylesProvider(props: Props) {
  const { children } = props

  return (
    <CacheProvider value={cache}>
      <Global styles={globalStyles} />
      {children}
    </CacheProvider>
  )
}
