import dayjs from 'dayjs'

/**
 * 不足十补零
 */
export function padZero(value: number) {
  return value < 10 ? `0${value}` : `${value}`
}

/**
 * 时间戳转换为音乐时长 mm:ss
 */
export function formatTime(value: number, format?: string) {
  return dayjs(value).format(format ?? 'YYYY-MM-DD HH:mm:ss')
}

/**
 * 时间戳转换为音乐时长 mm:ss
 */
export function formatDuration(value: number) {
  return dayjs.duration(value).format('mm:ss')
}

/**
 * 秒钟转换为音乐时长 mm:ss
 */
export function formatSecondsDuration(value: number) {
  return dayjs.duration(value, 'seconds').format('mm:ss')
}

/**
 * 控制图片尺寸
 * @example http://p4.music.126.net/JzNK4a5PjjPIXAgVlqEc5Q==/109951164154280311.jpg?param=200y200
 */
export function thumbnail(url: string, w: number, h: number = w) {
  if (url) {
    return `${url}?param=${w}y${h}`
  } else {
    return `https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=${w}y${h}`
  }
}

/**
 * 数量转换单位
 */
export function formatCount(value: number) {
  return value > 100000 ? `${Math.round(value / 10000)} 万` : value
}

/**
 * 防抖函数
 */
export function debounce(
  fn: { apply: (arg0: any, arg1: any) => void },
  t: number
) {
  let timer: any = null
  const delay = t || 500
  return function (this: any, ...args: any) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}
