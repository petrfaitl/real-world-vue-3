<template>
  <nav class="p-6 mx-auto flex gap-2 justify-center">
    <router-link :to="{ name: 'EventList' }" class="font-bold"
      >Events</router-link
    >
    |
    <router-link :to="{ name: 'About' }" class="font-bold">About</router-link>
  </nav>
  <router-view />
</template>

<style></style>
