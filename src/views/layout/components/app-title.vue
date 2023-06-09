<script lang="ts" setup name="appTop">
const memu = [
  {
    path: 'display_title',
    memu1: '导航栏1'
  },
  {
    path: 'display_dh1',
    memu1: '导航栏2'
  },
  {
    path: 'display_dh2',
    memu1: '导航栏3'
  },
  {
    path: 'display_dh4',
    memu1: '导航栏4'
  },
  {
    path: 'display_dh4',
    memu1: '导航栏5'
  }
]
</script>
<script lang="ts">
export default { name: 'appTop' }
</script>

<template>
  <div class="app_title">
    <ul>
      <li v-for="(item, index) in memu" :key="index">
        <router-link class="item" :to="`/layout/display/${item.path}`">{{
          item.memu1
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
.app_title {
  width: 100%;
  height: 60px;

  background-color: rgb(123, 167, 113);

  ul {
    list-style: none;
    display: flex;

    li {
      width: 130px;
      height: 50px;
      line-height: 50px;
      background-color: antiquewhite;
      display: flex;
      justify-content: center;
      margin: 5px;
      color: black;
      .item {
        justify-content: space-between;
      }
    }
  }
}
</style>
