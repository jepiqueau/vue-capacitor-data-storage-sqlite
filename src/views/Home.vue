<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-button @click="goToAbout" full>Go to About</ion-button>
        <ion-button @click="showDialogAlert" full>Show Alert Box</ion-button>
        <ion-button @click="showToast" full>Show Toast</ion-button>
        <ion-button @click="testStore" full>Test SQLite Store</ion-button>
        <ion-button @click="testStoreTables" full>Test SQLite Store Tables</ion-button>
        <ion-button @click="testIssue1" full>Test Issue1</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Dialog } from '@capacitor/dialog';
import { Toast } from '@capacitor/toast';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  },
  setup() {
      const router = useRouter()

      const goToAbout = () => {
          router.push({
              path: '/about'
          });
      };
      const showDialogAlert = async () => {
        await Dialog.alert({
          title: "Alert",
          message: "This is an alert message."
        });
      };
      const showToast = async () => {
        await Toast.show({
          text: "Hello from Capacitor!",
          duration: 'short',
          position: 'top'
        });
      };
      const testStore = () => {
          router.push({
              path: '/sqlitestore'
          });
      };
      const testStoreTables = () => {
          router.push({
              path: '/sqlitestoretables'
          });
      };
      const testIssue1 = () => {
          router.push({
              path: '/testissue1'
          });
      };
      return {
          goToAbout, showDialogAlert, showToast, testStore, testStoreTables,
          testIssue1
      }
  }

});
</script>

<style scoped>
#container {
  text-align: left;
  
  position: relative;
  left: 1%;
  right: 1%;
  top: 3%;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>