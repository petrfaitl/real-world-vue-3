<template>
  <div>Register for an Event</div>

  <button class="btn mt-4" @click="register">Register</button>
</template>

<script>
export default {
  name: "EventRegister",
  props: ["event"],
  inject: ["GStore"],
  methods: {
    register() {
      // Mock delay in registering
      setTimeout(() => {
        this.GStore.flashMessage = `You are successfully registered for ${this.event.title}.`;

        setTimeout(() => {
          this.GStore.flashMessage = "";
        }, 3000);
        // this.$router.push({
        //   name: "EventDetails",
        // });
        // Replaces the path in URL; disables history; prevents resubmissions
        this.$router.replace({
          name: "EventDetails",
        });
      }, 1500);
    },
  },
};
</script>

<style scoped></style>
