// 切换上一首 下一首
export enum ToggleOrder {
  pre = -1,
  next = 1
}

// 切换状态 sequential：顺序播放 cycle：单曲循环 random：随机播放
export enum ToggleType {
  sequential = 0,
  cycle = 1,
  random = 2
}

// 切换状态信息 text：文本 icon：图标
export const ToggleTypeInfo = {
  [ToggleType.sequential]: { text: '顺序播放', icon: 'player-sequential' },
  [ToggleType.cycle]: { text: '单曲循环', icon: 'player-cycle' },
  [ToggleType.random]: { text: '随机播放', icon: 'player-random' }
}
