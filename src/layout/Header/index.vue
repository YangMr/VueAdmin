<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
       <el-avatar :size="50" :src="$store.getters.userInfo.avatar" />
      {{$store.getters.userInfo.username || ""}}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="profile">个人中心</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const handleCommand = (command) => {
  switch (command) {
    case 'profile' :
      handleToProfile()
      break
    case 'logout' :
      handleLogout()
      break
  }
}

const handleToProfile = () => {
  console.log('profile')
}

const handleLogout = async () => {
  await store.dispatch('user/logout')
  router.push('/login')
}

</script>
<style scoped lang='scss'>
</style>
