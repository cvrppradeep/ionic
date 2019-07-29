<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Ionic 4 + Vue Application </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-button @click="goToPage2" full>Go To Page II</ion-button>
          <ion-list>
            <ion-item v-for="item of items" :key="item.id">
              <ion-label full>{{item.name}}</ion-label>
            </ion-item>
          </ion-list>
          <ion-badge color="primary">11</ion-badge>
          <ion-badge color="secondary">22</ion-badge>
          <ion-button shape="round" color="primary" fill="outline">Hello World</ion-button>
  <ion-button size="small">Small Button</ion-button>
    <ion-card>
  <ion-img src="/assets/myImg.png"></ion-img>

  <ion-card-content>
    <ion-card-title>Hello World</ion-card-title>

    <p>The content for this card</p>
  </ion-card-content>
</ion-card>
<ion-fab vertical="bottom" horizontal="end" slot="fixed">
  <ion-fab-button>
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>
</ion-fab>
{{iii}}
<ion-item>
  <ion-input required type="text" placeholder="First Name" v-model="iii"></ion-input>
</ion-item>

<ion-menu side="start">
  <ion-header translucent>
    <ion-toolbar color="secondary">
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-menu>

<ion-item>
  <ion-label>Hair Color</ion-label>
  <ion-select value="brown" ok-text="Okay" cancel-text="Dismiss">
    <ion-select-option value="brown">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>

<ion-slides pager="true">
  <ion-slide>
    <h1>Slide 1</h1>
  </ion-slide>

  <ion-slide>
    <h1>Slide 2</h1>
  </ion-slide>

  <ion-slide>
    <h1>Slide 3</h1>
  </ion-slide>
</ion-slides>

<!-- <ion-tabs>
  <ion-tab label="Music" icon="musical-note"></ion-tab>
  <ion-tab label="Profile" icon="person"></ion-tab>
  <ion-tab label="people" icon="people"></ion-tab>
</ion-tabs> -->


      </ion-content>
    </ion-page>
  </ion-app>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      iii: "",
      items: [{ id: 0, name: "Ahmed" }, { id: 1, name: "Naima" }]
    };
  },
  methods: {
    goToPage2() {
      this.$router.push("page2");
    }
  }
};
</script>
<style>
</style>
