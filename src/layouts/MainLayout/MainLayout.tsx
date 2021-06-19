import { ReactNode, useState } from 'react'
import { Layout } from 'antd'

import { ErrorBoundary } from '@/ui/ErrorBoundary'

import { Nav } from './Nav'
import * as S from './styles'

type Props = {
  children: ReactNode
}

export function MainLayout(props: Props) {
  const { children } = props
  const [collapsed, setCollapsed] = useState(false)

  function onCollapse(val: boolean) {
    setCollapsed(val)
  }

  return (
    <Layout css={S.wrapperCss}>
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <S.Sidebar>
          <Nav />
        </S.Sidebar>
      </Layout.Sider>
      <Layout css={S.contentWrapperCss}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </Layout>
    </Layout>
  )
}
