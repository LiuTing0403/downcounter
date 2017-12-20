
const SEC = 1000
const MIN = SEC * 60
const HOUR = MIN * 60
const DAY = HOUR * 24

const colors = [
  '#44a3a2',
  '#d79c44',
  '#e50033'
]

const weekdays = ['日', '一', '二', '三', '四', '五', '六']

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

export function getColor(days) {
  if (days > 100) {
    return colors[0]
  }
  if (days > 30) {
    return colors[1]
  }
  return colors[2]
}

export function getTodayString() {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const weekday = today.getDay()
  return `${month}月${day}日 星期${weekdays[weekday]}`
}
