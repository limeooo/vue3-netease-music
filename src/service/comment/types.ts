import { IMultiPageConfig } from '@/global/types'

/**
 * 评论类型
 * 0: 歌曲、1: mv、2: 歌单、3: 专辑、4: 电台、5: 视频、6: 动态
 */

export enum CommentType {
  song = '0',
  mv = '1',
  playlist = '2',
  album = '3',
  dj = '4',
  video = '5',
  event = '6'
}

/**
 * 请求类型
 *  最热 、 最新
 */
export enum CommentTransType {
  Hot = 'hot',
  New = 'new'
}

/**
 * 用户评论
 */
export interface IComment {
  id: number
  nickname: string
  avatarUrl: string
  content: string
  time: number
  likedCount: number
  repliedNickname: string
  repliedContent: string
}

/**
 * 用户评论 all数据
 */
export interface ICommentData {
  total: number
  cursor: string
  comments: IComment[]
}

/**
 * 用户最新评论 请求数据
 */
export interface ICommentNewParams {
  id: string | number
  type: CommentType
  pageNo?: number
  pageSize?: number
  sortType?: number
  cursor?: string
}

/**
 * 用户最热评论 请求数据
 */
export interface ICommentHotParams extends IMultiPageConfig {
  id: string | number
  type: CommentType
}
