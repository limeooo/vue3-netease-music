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
export function formatDuration(value: number) {
  return dayjs(value).format('mm:ss')
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
