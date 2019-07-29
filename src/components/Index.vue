<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Firebase IO</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-item>
          <ion-label>Name:</ion-label>
          <input v-model="name" required type="text" placeholder="First Name"/>
          <ion-button @click="submitName()">Add</ion-button>
        </ion-item>
        <ion-item>
    <ion-label>Filter</ion-label>
    <ion-toggle checked="relay" @click="switchRelay()"></ion-toggle>
    <ion-toggle v-model="bathroom"></ion-toggle>
    <ion-toggle v-model="bedroom"></ion-toggle>
  </ion-item>
        <ion-item>
    <ion-label>D4</ion-label>
    <ion-toggle checked="D4" @click="switchD4()"></ion-toggle>
  </ion-item>
        <ion-button @click="goToPage2" full>Go To Page II</ion-button>
        <ion-button @click="sample" full>Sample Page</ion-button>
        <ion-list>
            <ion-item v-for="i of iot" :key="i['.key']">
                {{i['.key']}} -- {{i['.value']}}
            </ion-item>
          </ion-list>
        <ion-list>
            <ion-item v-for="n of names" :key="n['.key']">
              <div v-if="!n.edit">
                <ion-label full>{{n.name}}</ion-label>
                <ion-button @click="removeName(n['.key'])">Remove</ion-button>
                <ion-button @click="setEditName(n['.key'])">Edit</ion-button>
              </div>
              <div v-else>
                <input v-model="n.name"/>
                <ion-button @click="saveEdit(n)">Save</ion-button>
                <ion-button @click="cancenEdit(n['.key'])">Cancel</ion-button>
              </div>
            </ion-item>
          </ion-list>
      </ion-content>
    </ion-page>
  </ion-app>
</template>
<script>
import { db, namesRef } from "./../firebase";
const iotRef = db.ref();
export default {
  name: "App",
  created() {
    // console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzz", db.ref("relay").value());
  },
  data() {
    return {
      name: "",
      relay: true,
      D4: true,
      bathroom: 1,
      bedroom: 1
    };
  },
  firebase: {
    names: namesRef,
    iot: iotRef
  },
  methods: {
    saveEdit(person) {
      const key = person[".key"];
      namesRef.child(key).set({ name: person.name, edit: false });
    },
    cancenEdit(key) {
      namesRef.child(key).update({ edit: false });
    },
    removeName(key) {
      namesRef.child(key).remove();
    },
    setEditName(key) {
      namesRef.child(key).update({ edit: true });
    },
    submitName() {
      namesRef.push({ name: this.name, edit: false });
      this.name = "";
    },
    goToPage2() {
      this.$router.push("page2");
    },
    sample() {
      this.$router.push("sample");
    },
    switchRelay() {
      this.relay = !this.relay;
      let relay = this.relay ? 1 : 0;
      iotRef.update({ relay });
    },
    switchD4() {
      this.D4 = !this.D4;
      let D4 = this.D4 ? 1 : 0;
      iotRef.update({ D4 });
    }
  }
};
</script>
