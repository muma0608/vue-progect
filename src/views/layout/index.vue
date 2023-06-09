<script setup lang="ts">
// 导入组件
import AppTopNavVue from './components/app-topnav.vue'
import AppFooterVue from './components/app-footer.vue'
</script>
<script lang="ts">
export default {
  name: 'layout'
}
</script>
<template>
  <div class="layout">
    <!-- 顶部通栏组件 -->
    <AppTopNavVue></AppTopNavVue>
    <!-- 二级路由的出口 -->
    <div class="body">
      
      <router-view></router-view>
    </div>
    <!-- 底部通栏组件 -->
    <!-- <AppFooterVue></AppFooterVue> -->
  </div>
</template>
<style scoped lang="less">
.layout {
  display: flex;
  height: 100vh;
  .body {
    flex: 1;
    overflow: auto;
    background-color: #c8d884;
  }
}
</style>
