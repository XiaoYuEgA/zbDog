<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
</script>

<template>
  <!-- 设置头目录 -->
  <el-header>
    <Header />
  </el-header>

  <el-main>
    <!-- 主要内容 -->
    <el-row class="main" justify="center" align="middle">
      <h2 class="title">张博卷狗网</h2>
      <RouterView></RouterView>
    </el-row>
  </el-main>
  <!-- 底部 音乐播放 -->
  <el-footer>
    <el-row justify="center" align="middle">
      <el-text class="tips">Tips: 按钮按下后三秒后才能继续按</el-text>
    </el-row>
    <div class="music">
      <MusicPlayer></MusicPlayer>
    </div>
  </el-footer>
</template>

<style scoped>
.title {
  font-size: 50px;
  color: #337ecc;
  margin-top: 20px;
}

.tips {
  color: rgba(128, 128, 128, 0.4);
  position: fixed;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.music {
  position: fixed;
  bottom: 10px;
  width: 25vw;
}
</style>
