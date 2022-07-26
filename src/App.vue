<template>
  <div id="app" class="relative">
    <div
      v-if="GStore.flashMessage"
      id="flashMessage"
      class="flex items-center absolute top-0 left-0 right-0 mx-auto p-4 space-x-4 w-fit max-w-lg bg-green-100 border border-vue-green text-vue-green-dark rounded-lg divide-x divide-gray-200 shadow z-10 space-x dark:bg-gray-800"
      role="alert"
    >
      <div class="text-sm font-normal">{{ GStore.flashMessage }}</div>
    </div>

    <nav class="p-6 mx-auto flex gap-2 justify-center">
      <router-link :to="{ name: 'EventList' }" class="font-bold"
        >Events</router-link
      >
      |
      <router-link :to="{ name: 'About' }" class="font-bold">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  inject: ["GStore"],
};
</script>

<style>
@keyframes fade {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#flashMessage {
  animation-name: fade;
  animation-duration: 3s;
}
</style>
