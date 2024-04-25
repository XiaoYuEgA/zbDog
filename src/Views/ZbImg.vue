<template>
  <el-col class="zbimg" align="middle">
    <el-image :src="urlData" class="img" @load="imgbuttonLoading">
      <template #error>
        <div class="image-slot">
          <el-icon><icon-picture /></el-icon>
        </div>
      </template>
    </el-image>
    <br />
    <el-button
      type="primary"
      round
      @click="getImg"
      class="zbbutton"
      :loading="isButtonLoading"
      >按下随机新张博</el-button
    >
  </el-col>
</template>

<script setup>
import { Picture as IconPicture } from "@element-plus/icons-vue";
import useGetZbImg from "../hooks/useGetZbImg.js";
const { urlData, getImg, imgbuttonLoading, isButtonLoading } = useGetZbImg();
</script>

<style scoped>
.img {
  height: 570px;
}

.zbbutton {
  margin-top: 10px;
}

.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}

.image-slot .el-icon {
  font-size: 30px;
}
</style>
