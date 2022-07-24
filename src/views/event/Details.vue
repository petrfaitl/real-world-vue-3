<template>
  <div v-show="showExtra" class="text-xs">{{ id }}</div>
  <div
    v-if="event"
    class="m-auto w-full sm:w-1/2 lg:w-1/3 shadow-xl p-8 flex flex-col text-center gap-3 relative"
  >
    <div
      class="absolute top-4 right-4 hover:scale-110 transition-transform active:animate-ping"
    >
      <router-link
        :to="{ name: 'EventRegister' }"
        class="text-xs font-bold text-vue-green"
        >EDIT</router-link
      >
    </div>
    <h1 class="font-bold text-2xl my-2">{{ event.title }}</h1>
    <div class="mb-3 hover:scale-110 transition-transform active:animate-ping">
      <router-link
        :to="{ name: 'EventRegister', params: { id } }"
        class="font-bold text-vue-green"
        >Register</router-link
      >
    </div>
    <span class="text-sm"
      >{{ event.time }} on {{ event.date }} @ {{ event.location }}</span
    >
    <div class="text-sm">{{ event.description }}</div>
  </div>
  <div v-else>
    <LoadingText />
  </div>
</template>

<script>
import EventService from "@/services/EventService";
import LoadingText from "@/components/LoadingText";

export default {
  name: "EventDetails",
  components: { LoadingText },
  data() {
    return {
      event: null,
    };
  },
  props: ["id", "showExtra"],
  async created() {
    try {
      this.event = await EventService.getEventDetails(this.id);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
