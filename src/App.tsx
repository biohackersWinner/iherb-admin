/// <reference types="@emotion/react/types/css-prop" />

import { Suspense, lazy } from 'react'
import { Route, Switch, RouteProps, Router } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import 'antd/dist/antd.css'

import { queryClient } from '@/core/query'
import { History } from '@/core/history'

import { MainLayout } from '@/layouts/MainLayout'

import { StylesProvider } from './StylesProvider'

const IndexPage = lazy(() => import('@/pages/IndexPage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))
const ProductPage = lazy(() => import('@/pages/ProductPage'))
const RecipePage = lazy(() => import('@/pages/RecipePage'))

function PrivateRoute(props: RouteProps) {
  const { path, exact, children } = props

  return (
    <Route path={path} exact={exact}>
      <MainLayout>
        <Suspense fallback={null}>{children}</Suspense>
      </MainLayout>
    </Route>
  )
}

function PublicRoute(props: RouteProps) {
  const { path, exact, children } = props

  return (
    <Route path={path} exact={exact}>
      <Suspense fallback={null}>{children}</Suspense>
    </Route>
  )
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StylesProvider>
        <Router history={History}>
          <Switch>
            <PublicRoute path="/login" exact>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/" exact>
              <IndexPage />
            </PrivateRoute>

            <PrivateRoute path="/products/:productId?" exact>
              <ProductPage />
            </PrivateRoute>

            <PrivateRoute path="/recipes/:recipeId?" exact>
              <RecipePage />
            </PrivateRoute>

            <PrivateRoute path="/profile" exact>
              <ProfilePage />
            </PrivateRoute>
          </Switch>
        </Router>
      </StylesProvider>

      {import.meta.env.DEV && (
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      )}
    </QueryClientProvider>
  )
}
