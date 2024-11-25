export const getLonelyInteger = (a: number[]): number => {
  const map = new Map()

  for (let n of a) {
    const nQtd = map.get(n)

    if (nQtd) {
      map.set(n, nQtd + 1)
    } else {
      map.set(n, 1)
    }
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }

  return -1
}
