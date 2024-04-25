import { createRouter, createWebHistory } from "vue-router";
import Zb from "../Views/Zb.vue";
import ZbImg from "../Views/ZbImg.vue";
import ZbDog from "../Views/ZbDog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Zb,
    },
    {
      path: "/img",
      component: ZbImg,
    },
    {
      path: "/dog",
      component: ZbDog,
    },
  ],
});

export default router;
