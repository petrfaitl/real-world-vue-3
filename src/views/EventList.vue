<template>
  <h1 class="font-display text-4xl text-center">Events for Good</h1>
  <div class="text-lg my-2 text-center">
    Total listed events {{ this.totalEvents }}
  </div>
  <div class="flex flex-col items-center px-8 my-8">
    <EventCard
      v-show="events"
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
    <div v-if="!events" class="m-auto w-full">
      <LoadingText v-for="n in 10" :key="n" />
    </div>
    <div class="w-full sm:w-1/2 lg:w-1/3 flex relative h-12">
      <router-link
        :to="{ name: 'EventList', query: { page: this.page - 1 } }"
        rel="prev"
        v-show="this.page !== 1"
        class="absolute left-0 hover:text-slate-900"
        >&langle; Prev</router-link
      >
      <router-link
        :to="{ name: 'EventList', query: { page: this.page + 1 } }"
        rel="next"
        class="absolute right-0 hover:text-slate-900"
        v-show="hasNextPage"
        >Next &rangle;</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard";
import EventService from "@/services/EventService";
import LoadingText from "@/components/LoadingText";
import { watchEffect } from "vue";

export default {
  name: "EventList",
  props: ["perPage", "page"],
  components: {
    EventCard,
    // eslint-disable-next-line vue/no-unused-components
    LoadingText,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    };
  },
  async created() {
    try {
      watchEffect(async () => {
        this.events = null;
        const { data, maxItems } = await EventService.getEvents(
          this.perPage,
          this.page
        );
        this.events = data;
        this.totalEvents = maxItems;
      });
    } catch (_) {
      this.$router.push({
        name: "NetworkError",
      });
    }
  },
  computed: {
    hasNextPage() {
      return this.totalEvents > this.page * this.perPage;
    },
  },
};
</script>
