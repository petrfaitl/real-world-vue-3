<template>
  <div
    v-if="event"
    class="m-auto w-full sm:w-1/2 lg:w-1/3 shadow-xl p-8 flex flex-col text-center gap-3 relative"
  >
    <button
      class="absolute -top-4 left-1 text-vue-green hover:text-vue-green-dark transition-all"
      @click="goBack"
    >
      &langle; Back
    </button>
    <div class="absolute top-4 right-4">
      <router-link
        :to="{ name: 'EventEdit' }"
        class="text-xs font-bold text-vue-green hover:text-vue-green-dark"
        >EDIT</router-link
      >
    </div>
    <h1 class="font-bold text-2xl my-2">{{ event.title }}</h1>
    <div class="mb-3 flex gap-3 mx-auto">
      <router-link
        :to="{ name: 'EventDetails', params: { id } }"
        class="font-bold text-vue-green hover:text-vue-green-dark"
        >Details</router-link
      >
      |
      <router-link
        :to="{ name: 'EventRegister' }"
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

export default {
  name: "EventLayout",
  components: { LoadingText },
  data() {
    return {
      event: null,
    };
  },
  props: ["id"],
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
  async created() {
    try {
      this.event = await EventService.getEventDetails(this.id);
    } catch (e) {
      console.error(e.message);

      if (e.response && e.response.status === 404) {
        this.$router.push({
          name: "404Resource",
          params: { resource: "event" },
        });
      }

      this.$router.push({
        name: "NetworkError",
      });
    }
  },
};
</script>
