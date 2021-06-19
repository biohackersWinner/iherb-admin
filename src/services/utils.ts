export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export function sleep(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function makeMapFromArray<T extends { [key: string]: any }>(
  arr: T[],
  id: string = 'id'
): Record<string, T> {
  return arr.reduce((acc: { [key: string]: T }, cur) => {
    acc[cur[id]] = cur
    return acc
  }, {})
}
