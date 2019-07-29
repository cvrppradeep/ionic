<template>
    <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-item>
  <ion-input required type="text" placeholder="Phone No." v-model="iii"></ion-input>
</ion-item>
        
            <ion-item>
            <ion-input required="Password" placeholder="Password"></ion-input>
        </ion-item>
        <ion-item>
        <ion-checkbox color="primary">Remember me</ion-checkbox>
        </ion-item>
        <ion-button size="small" color="primary">Login</ion-button>
      </ion-content>
    </ion-page>
    </ion-app>
</template>
<script>
export default {
  data() {
    return {
      iii: ""
    };
  }
};
</script>
<style>
</style>


