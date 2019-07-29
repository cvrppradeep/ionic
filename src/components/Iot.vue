<template>
  <div>
    <h1>{{ msg }}</h1>
    IOT View
    <ion-button @click="goToHome" full>Go Home</ion-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  }
};
</script>