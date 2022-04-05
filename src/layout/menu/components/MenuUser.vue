<template>
  <div class="menu-user" @click="dialogVisible = true">
    <div class="user-avatar">
      <img v-if="isLogin" :src="thumbnail(userAvatar, 80)" />
      <SvgIcon v-else name="menu-icon" size="36" />
    </div>
    <div class="user-name">
      <span>{{ userName }}</span>
    </div>
  </div>
  <template v-if="!isLogin">
    <el-dialog
      v-model="dialogVisible"
      width="30%"
      title="登录"
      append-to-body
      center
    >
      <el-form>
        <el-form-item required :show-message="false">
          <el-input
            type="number"
            size="large"
            v-model.number="inputValue"
            placeholder="请输入您的UID"
            :maxlength="12"
            autofocus
            style="margin: 10px 0 20px"
          />
        </el-form-item>
      </el-form>
      <p>
        <span> 1、请点我 </span>
        <a href="http://music.163.com" target="_blank">
          <span>http://music.163.com</span>
        </a>
        <span> 打开网易云音乐官网</span>
      </p>
      <p>2、点击页面右上角 "登录"</p>
      <p>3、点击您的头像, 进入我的主页</p>
      <p>4、复制浏览器地址栏 /user/home?id= 后面的数字</p>
      <p>5、将您的UID放到输入框确认即可登录</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleLoginClick()">
            <span>确定</span>
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  <template v-else>
    <el-dialog
      v-model="dialogVisible"
      width="30%"
      title="退出"
      append-to-body
      center
    >
      <p style="text-align: center">请确定是否要退出当前账号～</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleLogoutClick()">
            <span>确定</span>
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
import { thumbnail } from '@/utils'

const router = useRouter()
const userStore = useUserStore()
const { isLogin, userName, userAvatar } = storeToRefs(userStore)

const dialogVisible = ref(false)
const inputValue = ref()

// 监听点击执行登录
const handleLoginClick = () => {
  // 未登录 执行登录逻辑
  if (!inputValue.value) return
  userStore.getUserData(inputValue.value)
  dialogVisible.value = false
}

// 监听点击执行退出
const handleLogoutClick = () => {
  // 已登录 点击确定执行 重置用户数据 跳转路由
  userStore.resetUserData()
  router.push('/discovery')
  dialogVisible.value = false
}
</script>

<style lang="less" scoped>
.menu-user {
  .display-flex(@align-items: center);
  height: 72px;
  padding: 16px;
  cursor: pointer;
  .user-avatar {
    .display-flex(@align-items: center);
    .image-size(40px);
    img {
      border-radius: 50%;
    }
  }
  .user-name {
    font-size: @font-size;
    padding-left: 10px;
  }
}
</style>
