
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

function formateNum(num) {
  return num < 10 ? `0${num}` : num
}

export function downCountTime(startTime) {
  const date = new Date(startTime)
  const now = new Date()
  if (now > date) {
    return {min: '00', sec: '00'}
  }
  const delta = date - now
  const day = Math.floor(delta / DAY)
  const hour = Math.floor((delta - day * DAY) / HOUR)
  const min = Math.floor((delta - day * DAY - HOUR * hour) / MIN)
  const sec = Math.floor((delta - day * DAY - HOUR * hour - MIN * min) / SEC)
  if (day > 0) {
    return {day: formateNum(day), hour: formateNum(hour)}
  }
  if (hour > 0) {
    return {hour: formateNum(hour), min: formateNum(min)}
  }
  return {min: formateNum(min), sec: formateNum(sec)}
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
