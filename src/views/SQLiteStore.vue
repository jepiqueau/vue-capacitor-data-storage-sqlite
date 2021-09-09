<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="() => router.push('/home')">back</ion-button>
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
            <pre>
              <p>{{log}}</p>
            </pre>
          </ion-card-content>
        </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
         IonButtons, IonCard, IonCardContent } from '@ionic/vue';
import { defineComponent, getCurrentInstance, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SQLiteStore',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent
  },
  setup() {
    console.log("in SQLiteStore")
    const log = ref("");
    const app = getCurrentInstance();
    const storage = app?.appContext.config.globalProperties.$storage;
    const router = useRouter();

    async function testSQLiteStore() {
      log.value = log.value.concat("**** Starting Test SQLite Store ****\n"); 
      try {
        // open store
        await storage.openStore({});
        log.value = log.value.concat(" > openStore was successful \n");
        // store string
        await storage.setItem("session", "Session Opened");
        const session = await storage.getItem("session");
        if (session !== "Session Opened") {
          log.value = log.value.concat(" > SetItem/GetItem session failed \n");
          return { log };
        }
        log.value = log.value.concat(" > SetItem/GetItem session successful \n");
        const session1 = await storage.getItem("session1");
        if (session1 != null) {
          log.value = log.value.concat(" > SetItem/GetItem session1 failed \n");
          return { log };
        }
        log.value = log.value.concat(" > SetItem/GetItem session1 successful \n");
        // Store Json Object
        const data = { a: 20, b: "Hello World", c: { c1: 40, c2: "cool" } };
        await storage.setItem("testJson", JSON.stringify(data));
        let result = await storage.getItem("testJson");
        if (result !== JSON.stringify(data)) {
          log.value = log.value.concat(" > SetItem/GetItem Json Object failed \n");
          return { log };
        }
        log.value = log.value.concat(" > SetItem/GetItem Json Object successful \n");
        // Store a Number
        const data1 = 243.567;
        await storage.setItem("testNumber", data1.toString());
        result = await storage.getItem("testNumber");
        if (result !== data1.toString()) {
          log.value = log.value.concat(" > SetItem/GetItem Number failed \n");
          return { log };
        }
        log.value = log.value.concat(" > SetItem/GetItem Number successful \n");
        // isKey in Store
        result = await storage.isKey("testNumber");
        if(!result) {
          log.value = log.value.concat(" > isKey testNumber failed \n");
          return { log };
        }
        log.value = log.value.concat(" > isKey testNumber successful \n");
        result = await storage.isKey("foo");
        if(result) {
          log.value = log.value.concat(" > isKey foo failed \n");
          return { log };
        }
        log.value = log.value.concat(" > isKey foo successful \n");
        // get keys from store
        result = await storage.getAllKeys();
        console.log(`result.length ${result.length}`)
        if (
          result.length !== 3 ||
          result[0] !== "session" ||
          result[1] !== "testJson" ||
          result[2] !== "testNumber"
        ) {
          log.value = log.value.concat(" > getAllKeys failed \n");
          return { log };
        }
        log.value = log.value.concat(" > getAllKeys successful \n");
        // get values from store
        result = await storage.getAllValues();
        if (
          result.length !== 3 ||
          result[0] !== "Session Opened" ||
          result[1] !== JSON.stringify(data) ||
          result[2] !== data1.toString()
        ) {
          log.value = log.value.concat(" > getAllValues failed \n");
          return { log };
        }
        log.value = log.value.concat(" > getAllValues successful \n");
        // get keys and values from store
        result = await storage.getAllKeysValues();
        if (
          result.length !== 3 ||
          result[0].key !== "session" ||
          result[0].value !== "Session Opened" ||
          result[1].key !== "testJson" ||
          result[1].value !== JSON.stringify(data) ||
          result[2].key !== "testNumber" ||
          result[2].value !== data1.toString()
        ) {
          log.value = log.value.concat(" > getAllKeysValues failed \n");
          return { log };
        }
        log.value = log.value.concat(" > getAllKeysValues successful \n");
        // remove a key from store
        await storage.removeItem("testJson");
        result = await storage.getAllKeysValues();
        if (
          result.length !== 2 ||
          result[0].key !== "session" ||
          result[0].value !== "Session Opened" ||
          result[1].key !== "testNumber" ||
          result[1].value !== data1.toString()
        ) {
          log.value = log.value.concat(" > removeItem failed \n");
          return { log };
        }
        log.value = log.value.concat(" > removeItem successful \n");
        // Clear the store
        await storage.clear();
        result = await storage.getAllKeysValues();
        if (result.length !== 0) {
          log.value = log.value.concat(" > clear failed \n");
          return { log };
        }
        log.value = log.value.concat(" > clear successful \n");

        log.value = log.value.concat("**** Ending Test SQLite Store ****\n");
      } catch (err) {
          log.value = log.value.concat(`Error: ${err} \n`);
            return { log };
      }
    }
    testSQLiteStore();
    return {log, router};
  }

});
</script>

<style scoped>
  ion-card-content {
    font-size: 1.5rem !important;
  }
</style>