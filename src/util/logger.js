export const log = value => {
  process.env.NODE_ENV !== 'production' && console.log(value)
}
