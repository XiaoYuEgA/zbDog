<template>
  <el-col align="middle">
    <p class="title">张博语录展示 :</p>
    <el-text class="text1" v-text="zb"></el-text>
    <el-row align="middle" justify="center" class="zbzb">
      <el-button type="primary" round @click="getZbc" :loading="isButtonLoading"
        >随机张博新语录</el-button
      >
    </el-row>
  </el-col>
</template>

<script setup>
import useGetZb from "../hooks/useGetZb.js";
const { zb, getZbc, isButtonLoading } = useGetZb();
</script>

<style scoped>
.zbzb {
  margin-top: 50px;
}

.title {
  font-size: 50px;
  color: skyblue;
}

.text1 {
  color: skyblue;
  font-size: 50px;
}
</style>
