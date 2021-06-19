import { Component, ReactNode } from 'react'

import * as S from './styles'

type Props = {
  children: ReactNode
}

export class ErrorBoundary extends Component<Props> {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    error: null as any,
  }

  componentDidCatch(error: Error) {
    this.setState({ error })
  }

  render() {
    const { error } = this.state

    if (!error) {
      return this.props.children
    }

    return <S.ErrorWrapper>Что-то пошло не так</S.ErrorWrapper>
  }
}
