<template>
    <ion-app>
        <ion-page class="show-page">
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Signup</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="content" padding>
               
<ion-item>
  <ion-input required type="text" placeholder="First Name" v-model="iii"></ion-input>
</ion-item>
<ion-item>
  <ion-input required type="text" placeholder="Last Name"></ion-input>
</ion-item>
<ion-item>
<ion-input required type="text" placeholder="Email"></ion-input>
</ion-item>
<ion-item>
  <ion-input required type="numeric" placeholder="Phone No."></ion-input>
</ion-item>
<ion-item>
  <ion-input required type="text" placeholder="Create Password"></ion-input>
</ion-item>
<ion-item>
  <ion-input required type="text" placeholder="Confirm password"></ion-input>
</ion-item>
<ion-item>
  <ion-label>Gender</ion-label>
  <ion-select value="Male" ok-text="Okay" cancel-text="Dismiss">
  <ion-select-option value="Male">Male</ion-select-option>
    <ion-select-option value="Female">Female</ion-select-option>
    </ion-select>

    </ion-item>

 <ion-button size="small" color="primary">Signup</ion-button>
 
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