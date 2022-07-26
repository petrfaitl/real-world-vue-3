import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import AboutView from "@/views/AboutView.vue";
import EventDetails from "@/views/event/Details";
import EventRegister from "@/views/event/Register";
import EventEdit from "@/views/event/Edit";
import EventLayout from "@/views/event/Layout";
import NotFound from "@/views/NotFound";
import NetworkError from "@/views/NetworkError";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (to) => ({
      page: parseInt(to.query.page) || 1,
      perPage: parseInt(to.query.perPage) || 5,
    }),
  },
  {
    path: "/about-us",
    name: "About",
    alias: "/about",
    component: AboutView,
  },
  {
    path: "/about",
    redirect: { name: "About" },
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    component: EventLayout,
    props: true,
    children: [
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
      },
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
    ],
  },
  {
    path: "/event/:afterEvent(.*)",
    redirect: (to) => {
      return { path: "/events/" + to.params.afterEvent };
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "text-vue-green",
});

export default router;
