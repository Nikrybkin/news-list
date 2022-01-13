const { createRouter, createWebHistory } = require("vue-router");
import Main from "../pages/Main.vue";
import PostIdPage from "../pages/PostIdPage.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
