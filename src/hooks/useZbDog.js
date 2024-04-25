import { watch, ref } from "vue";

export default function () {
  let imageUrl = ref(
    "https://xiaoyuega-1301582000.cos.ap-shanghai.myqcloud.com/usr/uploads/2.png"
  );
  let audioSrc =
    "https://xiaoyuega-1301582000.cos.ap-shanghai.myqcloud.com/usr/uploads/5c8b03a9155ba47370.mp3";
  let rotationAngle = ref(0);
  let rotateInterval = ref(null);
  let isRotating = ref(false);
  let isReversed = ref(false);

  function rotateImage() {
    const audio = new Audio(audioSrc);
    audio.play();
    // 每次点击按钮时，增加旋转角度，并应用到样式
    let randomNumber = Math.random() * 360;
    // 将随机数向上取整
    randomNumber = Math.ceil(randomNumber);
    rotationAngle.value += isReversed.value ? -randomNumber : randomNumber;
  }

  function toggleRotation() {
    // 切换旋转的开关
    if (isRotating.value) {
      // 启动定时器，每隔一段时间旋转一次图片
      let randomNumber = Math.random() * 180;
      // 将随机数向上取整
      randomNumber = Math.ceil(randomNumber);
      rotateInterval.value = setInterval(() => {
        const audio = new Audio(audioSrc);
        audio.play();
        rotationAngle.value += isReversed.value ? -randomNumber : randomNumber; // 根据 isReversed 判断正转还是反转
      }, 100);
    } else {
      // 关闭定时器
      clearInterval(rotateInterval.value);
    }
  }
  watch(isRotating, () => {
    toggleRotation();
  });
  return {
    imageUrl,
    rotationAngle,
    isRotating,
    isReversed,
    rotateImage,
  };
}
