<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import useStore from '@/store'
let { home } = useStore()
const { changeTheme } = home
const { themeStatus } = storeToRefs(home) // storeToRefs 响应式渲染

// changeTheme()
console.log('themeStatus:', themeStatus.value)
const router = [
  {
    one: '',
    two: 'flex布局'
  },
  { one: 'display', two: 'display盒类型' },
  { one: 'listpay', two: 'listpay盒类型' }
]
const active = ref(0)
// 定时器
// setInterval(() => {}
// 到计时器
// setTimeout(() => {
  
// }, timeout);
  </script>
<script lang="ts">
export default { name: 'AppLeftnav' }
</script>
<template>
  <nav
    class="app_left_nav"
    :style="{ background: themeStatus ? 'black' : '#FFF' }"
  >
    <button @click="changeTheme()">点击事件</button>
    <ul>
      <li>
        <router-link
          @click="active = index"
          v-for="(item, index) in router"
          :key="index"
          :class="['left_nav_item', active === index ? 'active' : '']"
          :to="`/layout/${item.one}`"
          >{{ item.two }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="less">
.app_left_nav {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid #ccc;

  .left_nav_item {
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid #ccc;
    &:hover {
      background-color: #04c8f9;
    }
  }
  .active {
    background-color: #04c8f9;
  }
}
</style>
