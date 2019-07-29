<template>
    <ion-app>
        <ion-page class="show-page">
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>List</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="content" no-padding>
     <ion-grid no-padding>
  <ion-row>
     
      <ion-col>        
   <ion-card>
            <ion-avatar slot="start">
  <img style="width:100%;" src="./../assets/tshirt.png">
  </ion-avatar>
<ion-card-content>
    <ion-card-title>T-shirt</ion-card-title>
    <p>Rs999</p>
     </ion-card-content>
</ion-card>
    </ion-col> 
     <ion-col width-50 > 
   <ion-card>
            <ion-avatar slot="start">
  <img style="width:100%;" src="./../assets/polo.png">
  </ion-avatar>
<ion-card-content>
    <ion-card-title>T-shirt</ion-card-title>
    <p>Rs799</p>
     </ion-card-content>
</ion-card>
 </ion-col > 

  </ion-row>
  
 <ion-list>
    <ion-button size="small" color="primary">Buy Now</ion-button>
  </ion-list>
  
  
   </ion-grid>
</ion-content>
    </ion-page>
    </ion-app>
</template>
<script>
export default {};
</script>
<style>
</style>

               