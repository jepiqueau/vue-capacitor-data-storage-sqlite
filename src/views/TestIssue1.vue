<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>SQLiteStore Test</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">SQLiteStore Test</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-content>
          <IonButton color="secondary" v-on:click="showTesting(storage)"
            >Secondary</IonButton
          >
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/vue";
import { defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  name: "TestIssue1",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonButton,
    IonCard,
    IonCardContent,
  },
  setup() {
    const app = getCurrentInstance();
    const storage = app?.appContext.config.globalProperties.$storage;
/*    const showTesting = async () => {
      const resOpen = await storage.openStore({});
      if (!resOpen) {
        console.log(" > Error \n");
        return;
      } else {
        // Store Json Object
        const data = { a: 20, b: "Hello World", c: { c1: 40, c2: "cool" } };
        await storage.setItem("testJson", JSON.stringify(data));
        const result = await storage.getItem("testJson");
        if (result !== JSON.stringify(data)) {
          console.log(" > SetItem/GetItem Json Object failed \n");
          return;
        }
        console.log(" > SetItem/GetItem Json Object successful \n");
      }

    };
    return {showTesting};
    */
   return {storage};
  },
  methods: {
    async showTesting(storage) {
      const resOpen = await storage.openStore({});
      if (!resOpen) {
        console.log(" > Error \n");
        return;
      } else {
        // Store Json Object
        const data = { a: 20, b: "Hello World", c: { c1: 40, c2: "cool" } };
        await storage.setItem("testJson", JSON.stringify(data));
        const result = await storage.getItem("testJson");
        if (result !== JSON.stringify(data)) {
          console.log(" > SetItem/GetItem Json Object failed \n");
          return;
        }
        console.log(" > SetItem/GetItem Json Object successful \n");
      }
    },
  },

});
</script>

<style scoped>
ion-card-content {
  font-size: 1.5rem !important;
}
</style>