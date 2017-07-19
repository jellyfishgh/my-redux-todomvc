import { log } from './logger'

export class Storage {
  constructor(db = 'session') {
    this.storage = window[`${this.db}Storage`]
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
  get(k) {
    let v = this.storage.getItem(k)
    if (v === undefined) return v
    try {
      v = JSON.parse(v)
      return v
    } catch (e) {
      log(e)
      return v
    }
  }
}

export default db => new Storage(db)
