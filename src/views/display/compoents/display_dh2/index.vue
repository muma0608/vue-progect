<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '@/store'
import { reactive, ref, computed, watch, watchEffect } from 'vue'
let { home } = useStore()
let { changeTheme, changeCate } = home
let { themeStatus, cateList } = storeToRefs(home)

const { money, car = 'GTR' } = defineProps<{
  money: number
  car?: string
}>()
const myEmit = defineEmits<{
  (e: 'event1', money: number): void
  (e: 'changeCar', val: string): void
}>()
const hClick = () => {
  myEmit('event1', 200)
  myEmit('changeCar', 'BWM')
}
/*
reactive:
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
*/
const state = reactive({
  name: 'tom',
  age: 25,
  wife: {
    name: 'marry',
    age: 22
  }
})
console.log(state, state.wife)
 // 
const update = () => {
  state.name += '--'
  state.age += 1
  state.wife.name += '++'
  state.wife.age += 2
}
const data = { name: 'tom', age: 25 }
new Proxy(data, {
  // 拦截读取属性值
  get(target, prop) {
    return Reflect.get(target, prop)
  },
  // 拦截设置属性值或添加新属性
  set(target, prop, value) {
    return Reflect.set(target, prop, value)
  },
  // 拦截删除属性
  deleteProperty(target, prop) {
    return Reflect.deleteProperty(target, prop)
  }
})
const user = {
  name: 'John',
  age: 12
}
/*
    proxyUser是代理对象, user是被代理对象
    后面所有的操作都是通过代理对象来操作被代理对象内部属性
    */
// Proxy(target, handler): 用来创建一个代理对象, target可以是任何类型的对象,
// handler是一个对象, 里面定义了代理对象的所有操作
const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log('劫持get()', prop)
    return Reflect.get(target, prop)
  },

  set(target, prop, val) {
    console.log('劫持set()', prop, val)
    return Reflect.set(target, prop, val) // (2)
  },

  deleteProperty(target, prop) {
    console.log('劫持delete属性', prop)
    return Reflect.deleteProperty(target, prop)
  }
})
// 读取属性值
console.log(proxyUser === user)
console.log(proxyUser.name, proxyUser.age)
// 设置属性值
proxyUser.name = 'bob'
proxyUser.age = 13
console.log(user)

// 只有getter的计算属性
const user1 = reactive({
  firstName: 'A',
  lastName: 'B'
})
const fullName1 = computed(() => {
  console.log('fullName1')
  return user1.firstName + '-' + user1.lastName
})

console.log('cateList123' + cateList)
</script>
<template>
  <div>
    <div>
      <button @click="changeTheme()">点击事件</button>
    </div>
    <br />
    <h1>我的基本信息</h1>
    <ul  v-for="(item,index) in cateList" :key="index">
      <li>{{item.id }}</li>
      <li>{{item.name }}</li>
      <li>{{item.open }}</li>
    </ul>
    <div>
      <button @click="changeCate()">基本信息</button>
    </div>
    <div>
      <div class="" style="padding: 20px; margin: 20px; border: 1px solid red">
        <h1>子组件</h1>
        <p>从父组件接收 {{ money }} {{ car }}</p>
        <button @click="hClick()">emit</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
