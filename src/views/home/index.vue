<script lang="ts" setup name="AppFooter">
import { ref } from 'vue'
const button1 = [
  'flex-direction:row',
  'flex-direction:row-reverse',
  'flex-direction:column',
  'flex-direction:column-reverse'
]
const button2 = [
  'justify-content:flex-start',
  'justify-content:flex-end',
  'justify-content:center',
  'justify-content:space-between',
  'justify-content:space-around'
]

const active = ref(0)
const active1 = ref(0)
const styleValue = ['active1', 'active2', 'active3', 'active4']
const justify = ['justify1', 'justify2', 'justify3', 'justify4', 'justify5']

function btuStyle(index: number) {
  active.value = index
}

function btuStyle1(index: number) {
  active1.value = index
}
console.log(active.value)
</script>
<script lang="ts">
export default { name: 'Homw' }
</script>
<template>
  <div class="home">
    <!-- 进入路由跳转 -->
    <router-link to="/layout/home_one">home-one</router-link>
    <!-- 路由出口 -->
    <router-view></router-view>
    <div class="button">
      <button
        @click="btuStyle(index)"
        v-for="(item, index) in button1"
        :key="index"
        :class="['btu1', active === index ? 'active' : '']"
      >
        {{ item }}
      </button>
    </div>
    <div :class="['flex_row1', active ? `${styleValue[active]}` : '']">
      <div class="flex_item" style="background: red"><h1>1</h1></div>
      <div class="flex_item" style="background: yellow"><h1>2</h1></div>
      <div class="flex_item" style="background: greenyellow"><h1>3</h1></div>
    </div>
    <div class="button">
      <button
        @click="btuStyle1(index)"
        v-for="(item, index) in button2"
        :key="index"
        :class="['btu1', active1 === index ? 'active' : '']"
      >
      
        {{ item }}
      </button>
    </div>
    <div :class="['flex_row1', active1 ? `${justify[active1]}` : '']">
      <div class="flex_item" style="background: red"><h1>1</h1></div>
      <div class="flex_item" style="background: yellow"><h1>2</h1></div>
      <div class="flex_item" style="background: greenyellow"><h1>3</h1></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home {
  height: 100vh;
  .button {
    width: 100%;
    display: flex;

    .btu1 {
      width: 200px;
      height: 50px;
      background-color: #b9e311;

      &:hover {
        background-color: #0cf904;
      }
    }
    .active {
      background-color: #04c8f9;
    }
  }
  .flex_row1 {
    border: 1px solid #ff0000;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;

    .flex_item {
      width: 100px;
      height: 100px;
      background-color: #b9e311;
      // transition: all 0.5s ease-in-out;
    }
  }
  .active1 {
    flex-direction: row;
  }
  .active2 {
    flex-direction: row-reverse;
  }
  .active3 {
    flex-direction: column;
  }
  .active4 {
    flex-direction: column-reverse;
    // .flex_item {
    //   width: 100px !important;
    //   height: 200px !important;
    //   background: blue !important;
    // }
  }
  .justify1 {
    justify-content:flex-start;

  }
  .justify2 {
    justify-content:flex-end;

  }
  .justify3 {
    justify-content:center;

  }
  .justify4 {
    justify-content:space-between,
  }
  .justify3 {
    justify-content:space-around;

  }

}
</style>
