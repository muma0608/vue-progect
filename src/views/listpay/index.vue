<script setup lang="ts"></script>
<template>
  <div>
    <div>
        <!-- 进入路由跳转 -->
    <router-link to="/layout/listpay/listpay_one">home-one</router-link>

    <router-link to="/layout/listpay/listpay_two">home-one</router-link>
    <!-- 路由出口 -->
    <router-view></router-view>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
