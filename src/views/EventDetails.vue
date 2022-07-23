<template>
  <div
    v-if="event"
    class="m-auto w-full sm:w-1/2 lg:w-1/3 p-8 flex flex-col gap-3"
  >
    <h1 class="font-bold text-2xl my-6">{{ event.title }}</h1>
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
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  async created() {
    try {
      this.event = await EventService.getEventDetails(this.id);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
