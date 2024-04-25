<template>
	<el-menu
	      class="el-menu"
	      mode="horizontal"
	      :router="true"
	      :default-active="activeIndex"
	    >
	      <el-menu-item v-for="item in menuList" :index="item.path">
	        <el-icon><Memo /></el-icon>
	        <span>{{ item.name }}</span>
	      </el-menu-item>
	    </el-menu>
</template>

<script setup>
	import { Memo } from "@element-plus/icons-vue";
	import { ref } from "vue";
	import { useRouter } from "vue-router";
	
	const router = useRouter();
	
	let activeIndex = ref("1");
	
	const updateActiveIndex = () => {
	  activeIndex.value = router.currentRoute.value.path;
	};
	
	router.afterEach(() => {
	  updateActiveIndex();
	});
	
	const menuList = [
	  {
	    name: "张博名言",
	    path: "/",
	    index: "1",
	  },
	  {
	    name: "张博美图",
	    path: "/img",
	    index: "2",
	  },
	  {
	    name: "张博卷狗",
	    path: "/dog",
	    index: "2",
	  },
	];
</script>

<style>
</style>