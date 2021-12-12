import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tech from "../views/Tech.vue";
import Business from "../views/Business.vue";
import Sports from "../views/Sports.vue";
import Health from "../views/Health.vue";
import Science from "../views/Science.vue";
import General from "../views/General.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/tech",
    name:"Tech",
    component:Tech,
  },
  {
    path:"/business",
    name:"Business",
    component:Business,
  },
  {
    path:"/sports",
    name:"Sports",
    component:Sports,
  },

  {
    path:"/health",
    name:"Health",
    component:Health,
  },

  {
    path:"/science",
    name:"Science",
    component:Science,
  },
  {
    path:"/general",
    name:"General",
    component:General,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
