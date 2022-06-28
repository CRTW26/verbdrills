const findValue = (
  array: Array<{ value: string }>,
  selected: string
): { value: string } => {
  return array.find((el) => el.value === selected)
}

export { findValue }
