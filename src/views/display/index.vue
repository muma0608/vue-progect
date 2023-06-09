<script lang="ts" setup name="AppFooter">
// 导入组件
import AppFooterVue from '../layout/components/app-title.vue'
</script>
<script lang="ts">
export default { name: 'Homw' }
</script>

<template>
  <div class="display">
  <AppFooterVue></AppFooterVue>
    <div class="body">
      <router-view></router-view>
    </div>
    
    <div class="foot"></div>
  </div>
</template>

<style scoped lang="less">
.home {
  .title {
    width: 100%;
    height: 150px;
    display: flex;
    border: 1px red solid;
    .title_box {
      width: 100px;
      height: 100px;
      margin: 5px;
      background-color: aqua;
      display: flex;
      border: 1px red solid;
    }
  }
  .boday {
    width: 100%;
    height: 350px;
    display: flex;
    border: 1px red solid;
  }
}
</style>
