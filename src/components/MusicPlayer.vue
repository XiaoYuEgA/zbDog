<template>
  <div id="aplayer" ref="playerRef"></div>
</template>

<script setup>
import APlayer from "aplayer";
import "../assets/APlayer.min.css";
import { onMounted, defineProps, ref, reactive } from "vue";

const playerRef = ref();
const state = reactive({
  instance: null,
});

let aplayer = [
  {
    name: "张博主题曲",
    url: "https://xiaoyuega-1301582000.cos.ap-shanghai.myqcloud.com/usr/uploads/Shine%20of%20Triumph%20(1).mp3",
    cover:
      "https://xiaoyuega-1301582000.cos.ap-shanghai.myqcloud.com/usr/uploads/20240424183658.jpg",
    artist: "张博之父",
    lrc: "",
  },
  {
    name: "张博好大个",
    url: "https://xiaoyuega-1301582000.cos.ap-shanghai.myqcloud.com/usr/uploads/Shine%20of%20Triumph.mp3",
    cover:
      "https://xiaoyuega-1301582000.cos.ap-shanghai.myqcloud.com/usr/uploads/20240424183250.jpg",
    artist: "张博",
    lrc: "https://xiaoyuega-1301582000.cos.ap-shanghai.myqcloud.com/%E5%BC%A0%E5%8D%9A%E5%A5%BD%E5%A4%A7%E4%B8%AA.lrc",
  },
];

class Audio {
  constructor(name, url, cover, artist, lrc) {
    this.name = name;
    this.url = url;
    this.cover = cover;
    this.artist = artist;
    this.lrc = lrc;
  }
}

const props = defineProps({
  // 音频自动播放
  autoplay: {
    type: Boolean,
    default: false,
  },
  // 列表是否默认折叠
  listFolded: {
    type: Boolean,
    default: true,
  },
  lrcType: {
    type: Number,
    default: 3,
  },
});

onMounted(() => {
  function getSong(res) {
    let audioList = res.map(
      (value) =>
        new Audio(value.name, value.url, value.cover, value.artist, value.lrc) // , value.lrc
    );
    state.instance = new APlayer({
      container: playerRef.value,
      autoplay: props.autoplay,
      listFolded: props.listFolded,
      lrcType: props.lrcType,
      audio: audioList,
    });
  }
  getSong(aplayer);
});
</script>

<style></style>
