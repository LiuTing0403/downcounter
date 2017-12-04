
const SEC = 1000
const MIN = SEC * 60
const HOUR = MIN * 60
const DAY = HOUR * 24

export function isNoneEmptyObj(obj) {
  if (!obj || typeof (obj) !== 'object') {
    return false
  }
  if (Object.keys(obj).length > 0) {
    return true
  }
  return false
}

function formatTimeItem(num) {
  return num < 10 ? `0${num}` : `${num}`
}

export function formatTime(str, spliter) {
  const date = new Date(str)
  const year = date.getFullYear()
  const month = formatTimeItem(date.getMonth() + 1)
  const day = formatTimeItem(date.getDate())
  const hour = formatTimeItem(date.getHours())
  const minute = formatTimeItem(date.getMinutes())
  const seconds = formatTimeItem(date.getSeconds())
  if (spliter === 'CN') {
    return `${year}年${month}月${day}日${hour}时${minute}分`
  }
  return `${[year, month, day].join(spliter || '-')} ${hour}:${minute}:${seconds}`
}

export function downCountTime(startTime) {
  const date = new Date(startTime)
  const now = Date.now()
  let day
  console.log({startTime, now})
  if (now > date) {
    day = 0
    return {day}
  }
  const delta = date - now
  if (delta > 0) {
    day = Math.floor(delta / DAY)
  } else {
    day = 0
  }
  // const hour = Math.floor((delta - day * DAY) / HOUR)
  // const min = Math.floor((delta - day * DAY - HOUR * hour) / MIN)
  // const sec = Math.floor((delta - day * DAY - HOUR * hour - MIN * min) / SEC)
  return {day}
  // return `${day}天${hour}小时${min}分${sec}秒`
}

export function timeExpired(time) {
  if (!time) {
    return null
  }
  const today = new Date()
  const target = new Date(time)
  return target <= today
}

export function getCurrentDateString() {
  const today = new Date()
  return today.toISOString().slice(0, 10)
}
