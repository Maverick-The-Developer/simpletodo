export function dateToLocalDateString(date: Date) {
  const localDate = new Date(date)
  return (
    localDate.getFullYear() +
    '-' +
    (localDate.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    localDate.getDate().toString().padStart(2, '0')
  )
}
