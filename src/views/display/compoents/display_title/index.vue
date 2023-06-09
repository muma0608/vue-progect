<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '@/store'
let { home } = useStore()
const { changeString } = home
const { bannerList,titleList } = storeToRefs(home)
console.log('titleList',titleList);


</script>
<template>
  <div>
    <div>
      <button @click="changeString()">{{ bannerList }}</button>
    </div>
    <div class="title">
      <h1>display_title</h1>
      <ul>
        <li v-for="(item, index) in titleList" :key="index">{{item}}</li>
      </ul>

    </div>
  </div>
</template>
<style scoped lang="less">
.title ul {
  width: 100%;
  display: flex;
  color: red;
  list-style: none;
  li {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 5px;
    background-color: aqua;
    // display: flex;
    justify-content: space-between; 
    border: 1px red solid;
  }
}
</style>
