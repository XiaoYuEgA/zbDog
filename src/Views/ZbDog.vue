<template>
  <el-col class="zbDog" align="middle">
    <el-image
      :src="imageUrl"
      class="rotate-image"
      @click="rotateImage"
      :style="{ transform: `rotate(${rotationAngle}deg)` }"
    ></el-image>

    <el-row class="mt-2" align="middle" justify="center">
      <el-col>
        <el-text style="margin-right: 10px">持续摸摸</el-text>
        <el-switch
          v-model="isRotating"
          inline-prompt
          :active-icon="Check"
          :inactive-icon="Close"
        />
      </el-col>
      <el-col>
        <el-text style="margin-right: 10px">相反摸摸</el-text>
        <el-switch
          v-model="isReversed"
          inline-prompt
          :active-icon="Check"
          :inactive-icon="Close"
        />
      </el-col>
    </el-row>
  </el-col>
</template>

<script setup>
import { Check, Close } from "@element-plus/icons-vue";
import useZbDog from "../hooks/useZbDog";
const { imageUrl, rotationAngle, isRotating, isReversed, rotateImage } =
  useZbDog();
</script>

<style scoped>
.rotate-image {
  transition: transform 0.5s;
  width: 350px;
}
</style>
