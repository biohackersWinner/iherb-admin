import { sleep } from '@/services/utils'

import * as M from './mocks'

export async function getList() {
  await sleep()

  return M.productListMock
}
