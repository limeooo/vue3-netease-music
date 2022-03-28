/**
 * 进入网站提示 Tip
 */

import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'
ElNotification({
  type: 'warning',
  title: '提示',
  message:
    '由于本站音乐为直接获取网易云Api接口数据、导致有小部分音乐因不可控原因无法正常播放、敬请谅解～',
  duration: 0,
  offset: 50
})
