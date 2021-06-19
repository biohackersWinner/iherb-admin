import { createHashHistory, createBrowserHistory } from 'history'

export const History = import.meta.env.VITE_HISTORY_HASH
  ? createHashHistory()
  : createBrowserHistory()
