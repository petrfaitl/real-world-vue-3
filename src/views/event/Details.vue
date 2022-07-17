<template>
  <span class="text-sm"
    >{{ event.time }} on {{ event.date }} @ {{ event.location }}</span
  >
  <div class="text-sm">{{ event.description }}</div>
</template>

<script>
export default {
  name: "EventDetails",
  props: ["event"],
};
</script>
