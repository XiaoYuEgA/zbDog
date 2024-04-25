import axios from "axios";
import { onMounted, onUpdated, ref } from "vue";

export default function () {
  let url = "/api/getimg";
  let urlData = ref();
  let isButtonLoading = ref(false);

  async function getImg() {
    try {
      isButtonLoading.value = true;
      let result = await axios.get(url);
      urlData.value = result.data.url;
    } catch (error) {
      alert(error);
    }
  }
  onMounted(() => {
    getImg();
  });

  function imgbuttonLoading() {
    setTimeout(() => {
      isButtonLoading.value = false;
    }, 3000);
  }

  return { urlData, getImg, imgbuttonLoading, isButtonLoading };
}
