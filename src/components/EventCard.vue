<template>
  <div class="w-full sm:w-1/2 lg:w-1/3">
    <router-link
      :to="{ name: 'EventDetails', params: { id: parseInt(event.id) } }"
    >
      <div
        class="p-8 text-center cursor-pointer border border-slate-300 hover:border-slate-500 mb-8 hover:scale-105 hover:shadow-lg transition-transform duration-300"
      >
        <span class="text-sm">@ {{ event.time }} on {{ event.date }}</span>
        <h4 class="font-bold text-lg my-6">{{ event.title }}</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  data() {
    return {};
  },
  props: {
    event: Object,
  },
};
</script>
<style scoped></style>
