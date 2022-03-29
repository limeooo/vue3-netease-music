/**
 * 进入网站提示 Tip
 */

import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'
ElNotification({
  type: 'warning',
  title: '提示',
  message:
    '由于本站音乐为直接获取网易云API接口数据、导致VIP音乐无法正常播放和下载、敬请谅解～',
  duration: 0,
  offset: 50
})
