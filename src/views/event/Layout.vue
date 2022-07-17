<template>
  <div
    v-if="event"
    class="m-auto w-full sm:w-1/2 lg:w-1/3 shadow-xl p-8 flex flex-col text-center gap-3 relative"
  >
    <div class="absolute top-4 right-4">
      <router-link
        :to="{ name: 'EventEdit' }"
        class="text-xs font-bold text-vue-green hover:text-vue-green-dark"
        >EDIT</router-link
      >
    </div>
    <h1 class="font-bold text-2xl my-2">{{ event.title }}</h1>
    <div class="mb-3">
      <router-link
        :to="{ name: 'EventDetails', params: { id } }"
        v-if="$route.name === 'EventRegister' || $route.name === 'EventEdit'"
        class="font-bold text-vue-green hover:text-vue-green-dark"
        >Details</router-link
      >
      <router-link
        :to="{ name: 'EventRegister' }"
        v-else
        class="font-bold text-vue-green hover:text-vue-green-dark"
        >Register</router-link
      >
    </div>
    <router-view :event="event" />
  </div>
  <div v-else>
    <LoadingText />
  </div>
</template>

<script>
import EventService from "@/services/EventService";
import LoadingText from "@/components/LoadingText";
import { watchEffect } from "vue";

export default {
  name: "EventLayout",
  components: { LoadingText },
  data() {
    return {
      event: null,
    };
  },
  props: ["id"],
  async created() {
    try {
      watchEffect(async () => {
        this.event = await EventService.getEventDetails(this.id);
      });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
