import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import {
  HomeOutlined,
  PayCircleOutlined,
  ClusterOutlined,
  SwapOutlined,
  TagOutlined,
  TagsOutlined,
  UserOutlined,
  TeamOutlined,
  ShopOutlined,
  ExperimentOutlined,
} from '@ant-design/icons'

import * as S from './styles'

type MenuItemProps = {
  to: string
  Icon: any
  text: string
}

function renderItem(props: MenuItemProps) {
  const { to, text, Icon } = props
  return (
    <Menu.Item key={to}>
      <Link to={to}>
        <Icon />
        <span>{text}</span>
      </Link>
    </Menu.Item>
  )
}

export function Nav() {
  const location = useLocation()

  return (
    <Menu
      css={S.menuCss}
      defaultSelectedKeys={[location.pathname]}
      mode="inline"
      theme="dark"
    >
      {renderItem({ to: '/', Icon: HomeOutlined, text: 'Главная' })}

      {renderItem({
        text: 'Продукция',
        to: '/products',
        Icon: ShopOutlined,
      })}

      {renderItem({
        text: 'Схемы (рецепты)',
        to: '/recipes',
        Icon: ExperimentOutlined,
      })}

      {/*{renderItem({*/}
      {/*  text: 'Клиенты',*/}
      {/*  to: '/clients',*/}
      {/*  Icon: TeamOutlined,*/}
      {/*})}*/}

      {renderItem({ to: '/profile', Icon: UserOutlined, text: 'Иванов Иван' })}
    </Menu>
  )
}
