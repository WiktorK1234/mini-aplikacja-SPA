import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Profile from "../views/profile.vue";
import Gallery from "../views/gallery.vue";
import photoDetails from "../views/photoDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
  { path: "/gallery", component: Gallery },
  {
    path: "/photo/:id",
    name: "PhotoDetails",
    component: photoDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
