const removeItem = <T>(arr: Array<T>, item: T): Array<T> => {
  const index = arr.indexOf(item)

  const arrCopy = [...arr]

  if (index > -1) {
    arrCopy.splice(index, 1)

    return arrCopy
  }

  return null
}

export { removeItem }
