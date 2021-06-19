import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const SOURCE_PATH = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: "import React from 'react'; import {jsx} from '@emotion/react'",
  },
  resolve: {
    alias: {
      '@': SOURCE_PATH,
    },
  },
})
