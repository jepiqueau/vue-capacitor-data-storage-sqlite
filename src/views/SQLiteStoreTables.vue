<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>SQLiteStoreTables Test</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">SQLiteStoreTables Test</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item>
          <ion-button @click="testSQLiteStoreTables" full>Set Tables in Store</ion-button>
        </ion-item>
        <ion-item v-if="isTablesSet">
          <ion-button @click="testGetTable('saveData')" full>Get Table1 in Store</ion-button>
        </ion-item>
        <ion-item v-if="isTablesSet">
          <ion-button @click="testGetTable('users')" full>Get Table2 in Store</ion-button>
        </ion-item>
        <ion-item v-if="isTablesSet">
          <ion-button @click="testGetTable('myStore')" full>Get Table3 in Store</ion-button>
        </ion-item>
      </ion-list>
      <ion-card v-if="isTest">
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton,
         IonButtons, IonCard, IonCardContent, IonList, IonItem } from '@ionic/vue';
import { defineComponent, getCurrentInstance, ref } from 'vue';

export default defineComponent({
  name: 'SQLiteStoreTables',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonList,
    IonItem
  },
  setup() {
    console.log("in SQLiteStoreTables")
    const log = ref("");
    const isTablesSet = ref(false);
    const isTest = ref(false);
    const DB_NAME = "test_tables";
    const app = getCurrentInstance();
    const storage = app?.appContext.config.globalProperties.$storage;

    const store = async (table: string) => {
      // open store
      const resOpen = await storage.openStore({database: DB_NAME});
      if( !resOpen ) {
        return {result: false, message: `Couldn't open the store with database "${DB_NAME}"`};
      } else {
        return await storage.setTable(table);
      }
    }
    const testSQLiteStoreTables = async () => {
      log.value = "";
      isTest.value = true;
      log.value = log.value.concat("**** Starting Test SQLite Store Tables ****\n");
      let result = await store("saveData");
      if(!result.result) {
        log.value = log.value.concat(" > Store 'saveData' failed \n");
        return { log };
      }
      log.value = log.value.concat(" > Store 'saveData' successful \n");
      await storage.setItem("message1", "Welcome from Jeep");
      await storage.setItem("message2", "Hello World!");
      result = await store("users");
      if(!result.result) {
        log.value = log.value.concat(" > Store 'users' failed \n");
        return { log };
      }
      log.value = log.value.concat(" > Store 'users' successful \n");
      await storage.setItem("user1",JSON.stringify({
          age: 50,
          name: "jeep",
          email: "jeep@example.com"
        })
      );
      await storage.setItem("user2",JSON.stringify({
          age: 35,
          name: "jones",
          email: "jones@example.com"
        })
      );
      result = await store("myStore");
      if(!result.result) {
        log.value = log.value.concat(" > Store 'myStore' failed \n");
        return { log };
      }
      log.value = log.value.concat(" > Store 'myStore' successful \n");
      await storage.setItem("a", "251.35");
      await storage.setItem("session", "expired");
      await storage.setItem("json", JSON.stringify({title: "message 1",
                            body: "Lorem ipsum ..."}));

      isTablesSet.value = true;
      log.value = log.value.concat("**** Ending Test SQLite Store Tables ****\n");
    };

    const testGetTable = async (table: string) => {
      log.value = "";
      log.value = log.value.concat(`** Starting Get SQLite Store ${table} **\n`); 
      let result = await store(table);
      if(!result.result) {
        log.value = log.value.concat(` > Store ${table} failed \n`);
        return { log };
      }
      result = await storage.getAllKeysValues();
      if((table === "saveData" || table === "users") && result.length === 2 ||
          table === "myStore" && result.length === 3) {
        result.forEach((keyvalue: any) => {
        log.value = log.value.concat(` > (${keyvalue.key} , ${keyvalue.value})\n`);
        })        
        log.value = log.value.concat(`** Ending Get SQLite Store ${table} **\n`);
        return { log };
      }
      log.value = log.value.concat(`** Get SQLite Store ${table} failed **\n`);
      return { log };
    }
    return {log, isTablesSet, isTest, testSQLiteStoreTables, testGetTable};
  }

});
</script>

<style scoped>
  ion-card-content {
    font-size: 1.5rem !important;
  }
</style>