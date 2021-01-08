import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import { defineCustomElements as pwaElements } from "@ionic/pwa-elements/loader";

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { useStorageSQLite } from 'vue-data-storage-sqlite-hook/dist';

// StorageSQLite Hook  
const { openStore, getItem, setItem, getAllKeys, getAllValues,
  getAllKeysValues, isKey, removeItem,
  clear, setTable, isAvailable} = useStorageSQLite();

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
// Singleton StorageSQLite Hook  
app.config.globalProperties.$storage = {
  openStore: openStore, getItem: getItem, setItem: setItem, getAllKeys: getAllKeys,
  getAllValues: getAllValues, getAllKeysValues: getAllKeysValues, isKey: isKey,
  removeItem: removeItem,clear: clear, setTable: setTable, isAvailable:isAvailable};
  
  
router.isReady().then(() => {
  app.mount('#app');
  pwaElements(window);
});