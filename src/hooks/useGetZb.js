import { getCurrentInstance, onMounted, onUpdated, ref, watch } from "vue";
import axios from "axios";
import * as data from "../assets/chengdu.js";

export default function () {
  const urlPath = "/api/get";
  let zb = ref();
  let isButtonLoading = ref(false);

  async function getZbc() {
    try {
      isButtonLoading.value = true;
      let result = await axios.get(urlPath);
      zb.value = result.data;
      setTimeout(() => {
        isButtonLoading.value = false;
      }, 1000);
    } catch (e) {
      alert(e);
    }
  }
  onMounted(() => {
    getZbc();
  });

  return {
    zb,
    getZbc,
    isButtonLoading,
  };
}
