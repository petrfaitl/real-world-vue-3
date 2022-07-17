import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import AboutView from "@/views/AboutView.vue";
import EventDetails from "@/views/event/Details";
import EventRegister from "@/views/event/Register";
import EventEdit from "@/views/event/Edit";
import EventLayout from "@/views/event/Layout";

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
    name: "EventLayout",
    component: EventLayout,
    props: (route) => ({ id: route.params.id }),
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "text-vue-green",
});

export default router;
