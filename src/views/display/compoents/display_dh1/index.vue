<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '@/store'
import { ref } from 'vue'
import display_dh2 from '../display_dh2/index.vue'
let { home } = useStore()
const { changeTheme } = home
const { themeStatus } = storeToRefs(home)

let money = ref(100)
const event1 = (val: number) => {
  console.log('event1', val)
  money.value = val
}
// 
const changeCar = (val: string) => {
  console.log('changeCar', val)
}

</script>
<template>
  <div>

    
    <div>
      <button @click="changeTheme()">点击事件</button>
    </div>
    <div style="padding: 20px; margin: 20px; border: 1px solid red">
      <h1>父组件</h1>
      <p>传给子组件：{{ money }}</p>
      <display_dh2 :money="money" car="特斯拉" @change-car="changeCar" />
      <display_dh2 :money="money" @event1="event1" />
    </div>
    
  </div>
</template>
<style scoped lang="less"></style>
