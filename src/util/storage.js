import { log } from './logger'

export class Storage {
  constructor(db = 'session') {
    this.storage = window[`${db}Storage`]
  }
  set(k, v) {
    try {
      this.storage.setItem(k, JSON.stringify(v))
      return true
    } catch (e) {
      log(e)
      return false
    }
  }
  get(k, defaultValue = null) {
    let v = this.storage.getItem(k)
    if (v === undefined) return defaultValue
    try {
      v = JSON.parse(v)
      return v
    } catch (e) {
      log(e)
      return v
    }
  }
}

export const sdb = new Storage()
export const ldb = new Storage('local')
