import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import AboutView from "@/views/AboutView.vue";
import EventDetails from "@/views/event/Details";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 5,
    }),
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    component: EventDetails,
    props: (route) => ({ showExtra: false, id: route.params.id }),
  },
  {
    path: "/event/:id/register",
    name: "EventRegister",
    props: (route) => ({ id: route.params.id }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "text-vue-green",
});

export default router;
