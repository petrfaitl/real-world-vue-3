<template>
  <h1 class="font-display text-4xl">Events for Good</h1>
  <div class="flex flex-col items-center px-8 mt-8">
    <!--    <div>-->
    <EventCard
      v-show="events"
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
    <!--    </div>-->
    <div v-if="!events" class="m-auto w-full">
      <LoadingText v-for="n in 10" :key="n" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard";
import EventService from "@/services/EventService";
import LoadingText from "@/components/LoadingText";

export default {
  name: "EventList",
  components: {
    EventCard,
    // eslint-disable-next-line vue/no-unused-components
    LoadingText,
  },
  data() {
    return {
      events: null,
    };
  },
  async created() {
    try {
      this.events = await EventService.getEvents();
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
