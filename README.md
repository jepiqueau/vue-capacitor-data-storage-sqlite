# vue-capacitor-data-storage-sqlite
Sample project that shows an integration of [capacitor-data-storage-sqlite Capacitor Plugin](https://github.com/jepiqueau/capacitor-data-storage-sqlite) 
in Vue.js App.

## Project setup
To start a new project using Vue.js, clone this repo to a new directory:

```bash
git clone https://github.com/jepiqueau/vue-capacitor-data-storage-sqlite.git my-app
cd my-app
git remote rm origin
```

```bash
npm install
```
### Adding Capacitor to your project

```bash
npm install --save @capacitor/core @capacitor/cli
npx cap init VueCapacitorDataStorageSqlite com.example.vuecapacitordatastoragesqlite
```
Tell Capacitor where to look for the built files by replacing "www" by "dist" in the file capacitor.config.json

```
{
  "appId": "com.example.vuecapacitordatastoragesqlite",
  "appName": "VueCapacitorDataStorageSqlite",
  "bundledWebRuntime": false,
  "webDir": "dist"
}
```
### Create the *dist* folder with the built files
```bash
npm run build
```

### Adding Platforms
```bash
npx cap add android
npx cap add ios
npx cap add electron
```

### Building App for Targeted Platforms
```bash
npx cap update
npm run build
npx cap copy
npx cap copy web
```

#### Web
```bash
npm run serve
```
#### IOS
```bash
npx cap open ios
```
Xcode will be opened with your project and will index the files. When completed, clean the build folder, create the build, select your apple device or emulator and click on the run button. The application should display four buttons. Click on them

#### Android
```bash
npx cap open android
```
Android Studio will be opened with your project and will sync the files.
In Android Studio go to the file MainActivity in app/java/com.example.vuecapacitordatastoragesqlite and modified as follows

```
package com.example.vuecapacitordatastoragesqlite;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.jeep.plugin.capacitor.capacitordatastoragesqlite.CapacitorDataStorageSqlite;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CapacitorDataStorageSqlite.class);
    }});
  }
}

```
Sync Project with Gradle Files
Build Clean Project
Setup the SDK, i used the Android API 27 platform
and make Update when asked

When all this is done and your buid is succesful, click on the run project button and select your device or emulator, the application will launch and display four buttons.

#### Electron
```bash
cd electron
npm run electron:start
```

### Lints and fixes files
```
npm run lint
```

## Start a Vue-Capacitor Project from scratch

### Creating a Vue Project
#### Installing the Vue Cli

```bash
$ npm install -g @vue/cli
```

#### Generating the Vue Project

```bash
vue create vue-capacitor-data-storage-sqlite
```

In the vue project creation, select the following presets:
  - Manually select functions
  - Features
    - Babel
    - Router
    - Vuex
    - Linter
  - Use history No
  - Pick a Linter  EsLint + Prettier
  - Lint on save
  - In dedicated config files
  - Save this as preset for future projects No

When the installation complete

```bash
cd vue-capacitor-data-storage-sqlite
npm run serve
```

Open the browser at http://localhost:8080/

#### Adding Ionic 4 to your project

```bash
npm install --save @ionic/vue
npm install --save @ionic/core
```

Modify the index.html file in the public folder

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>vue-capacitor-data-storage-sqlite</title>
    <link href="https://unpkg.com/@ionic/core@4.0.0-beta.17/css/ionic.bundle.css" type="text/css" rel="stylesheet">
  </head>
  <body>
    <noscript>
      <strong>We're sorry but vue-capacitor-data-storage-sqlite doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <script      
  </body>
</html>
```
Get the latest version of the Ionic core package from [npm](https://www.npmjs.com/package/@ionic/core)

To tell Vue that components starting with the ion prefix are not Vue components, you need to modify the content of the file main.js as follows
```
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Ionic from "@ionic/vue";

Vue.use(Ionic);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

#### Adding Capacitor to your project

```bash
npm install --save @capacitor/core @capacitor/cli
npx cap init VueCapacitorDataStorageSqlite com.example.vuecapacitordatastoragesqlite
```
Tell Capacitor where to look for the built files by replacing "www" by "dist" in the file capacitor.config.json

```
{
  "appId": "com.example.vuecapacitordatastoragesqlite",
  "appName": "VueCapacitorDataStorageSqlite",
  "bundledWebRuntime": false,
  "webDir": "dist"
}
```

#### Adding capacitor-data-storage-sqlite plugin

```bash
npm install --save capacitor-data-storage-sqlite@latest
```

### Modify the Vue project to fit your needs

Delete the component HelloWorld.vue

#### App.Vue File
Delete the content of the file App.vue and replace it with
```
<template>
<ion-app>
   <router-view></router-view>
</ion-app>
</template>
```

#### About.Vue Views File
Replace the content of the file About.vue sitting in the folder views

```
<template>
<ion-app>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>
        Vue Capacitor | About
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content padding>
    <p>This is the About page.</p>
    <ion-button @click="goBackHome()" full>Go Back!</ion-button>
  </ion-content>
</ion-app>
</template>

<script>
export default {
  name: "About",
  methods: {
    goBackHome() {
      this.$router.push("/");
    }
  }
};
</script>
```

#### Home.Vue Views File
Replace the content of the file Home.vue with
```
<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          Vue Capacitor
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      The world is your oyster.
      <p>If you get lost, the <a href="https://ionicframework.com/docs">docs</a> will be your guide.</p>
      <ion-button @click="goToAbout" full>Go to About</ion-button>
      <ion-button @click="showDialogAlert" full>Show Alert Box</ion-button>
      <ion-button @click="showToast" full>Show Toast</ion-button>
      <ion-button @click="testSqlite" full>Test Plugin SQL</ion-button>

      <p class="platform hidden"></p>

      <p class="populate hidden">
        Storing data successful
      </p>
      <p class="iskey hidden">
        Iskey successful
      </p>
      <p class="keys hidden">
        Get keys successful
      </p>
      <p class="values hidden">
        Get values successful
      </p>
      <p class="keysvalues hidden">
        Get keys/values successful
      </p>
      <p class="remove hidden">
        Remove key successful
      </p>
      <p class="clear hidden">
        Clear keys successful
      </p>
      <p class="success hidden">
        The test was successful
      </p>
      <p class="failure hidden">
        The test failed
      </p>
    </ion-content>
  </ion-app>
</template>

<style>
.hidden {
  visibility: hidden;
}
</style>

<script>
import { Plugins } from "@capacitor/core";
import { CapacitorDataStorageSqlite } from "capacitor-data-storage-sqlite";

const { Toast } = Plugins;
const { Modals } = Plugins;
const { Device } = Plugins;

export default {
  name: "Home",
  methods: {
    goToAbout() {
      this.$router.push("about");
    },
    async showDialogAlert() {
      await Modals.alert({
        title: "Alert",
        message: "This is an alert message."
      });
    },
    async showToast() {
      await Toast.show({
        text: "Hello from Capacitor!",
        duration: 150
      });
    },
    async testSqlite() {
      const info = await Device.getInfo();
      const pltEl = document.querySelector(".platform");
      pltEl.textContent = info.platform;
      pltEl.classList.remove("hidden");
      let storage = {};
      if (info.platform === "ios" || info.platform === "android") {
        const { CapacitorDataStorageSqlite } = Plugins;
        storage = CapacitorDataStorageSqlite;
      } else {
        storage = CapacitorDataStorageSqlite;
      }
      //populate some data
      //string
      let retpopulate = false;
      let retiskey = false;
      let retkeys = false;
      let retvalues = false;
      let retkeysvalues = false;
      let retremove = false;
      let retclear = false;
      let result = await storage.set({
        key: "session",
        value: "Session Opened"
      });
      result = await storage.get({ key: "session" });
      let ret1 = false;
      if (result.value === "Session Opened") ret1 = true;
      // json
      let data = { a: 20, b: "Hello World", c: { c1: 40, c2: "cool" } };
      await storage.set({ key: "testJson", value: JSON.stringify(data) });
      result = await storage.get({ key: "testJson" });
      let ret2 = false;
      if (result.value === JSON.stringify(data)) ret2 = true;
      // number
      let data1 = 243.567;
      await storage.set({ key: "testNumber", value: data1.toString() });
      result = await storage.get({ key: "testNumber" });
      let ret3 = false;
      if (result.value === data1.toString()) ret3 = true;
      if (ret1 && ret2 && ret3) retpopulate = true;
      if (retpopulate)
        document.querySelector(".populate").classList.remove("hidden");

      result = await storage.iskey({ key: "testNumber" });
      ret1 = result.result;
      result = await storage.iskey({ key: "foo" });
      ret2 = result.result;
      if (ret1 && !ret2) retiskey = true;
      if (retiskey) document.querySelector(".iskey").classList.remove("hidden");

      result = await storage.keys();
      if (
        result.keys.length === 3 &&
        result.keys[0] === "session" &&
        result.keys[1] === "testJson" &&
        result.keys[2] === "testNumber"
      ) {
        retkeys = true;
        document.querySelector(".keys").classList.remove("hidden");
      }
      result = await storage.values();
      if (
        result.values.length === 3 &&
        result.values[0] === "Session Opened" &&
        result.values[1] === JSON.stringify(data) &&
        result.values[2] === data1.toString()
      ) {
        retvalues = true;
        document.querySelector(".values").classList.remove("hidden");
      }

      storage.keysvalues().then(result => {
        if (
          result.keysvalues.length === 3 &&
          result.keysvalues[0].key === "session" &&
          result.keysvalues[0].value === "Session Opened" &&
          result.keysvalues[1].key === "testJson" &&
          result.keysvalues[1].value === JSON.stringify(data) &&
          result.keysvalues[2].key === "testNumber" &&
          result.keysvalues[2].value === data1.toString()
        ) {
          retkeysvalues = true;
          document.querySelector(".keysvalues").classList.remove("hidden");
          storage.remove({ key: "testJson" }).then(result => {
            if (result.result) {
              storage.keysvalues().then(async res => {
                if (
                  res.keysvalues.length === 2 &&
                  res.keysvalues[0].key === "session" &&
                  res.keysvalues[0].value === "Session Opened" &&
                  res.keysvalues[1].key === "testNumber" &&
                  res.keysvalues[1].value === data1.toString()
                ) {
                  retremove = true;
                  document.querySelector(".remove").classList.remove("hidden");
                }
                result = await storage.clear();
                if (result.result) {
                  let res = await storage.keysvalues();
                  if (res.keysvalues.length === 0) {
                    retclear = true;
                    document.querySelector(".clear").classList.remove("hidden");
                  }
                  if (
                    retpopulate &&
                    retiskey &&
                    retkeys &&
                    retvalues &&
                    retkeysvalues &&
                    retremove &&
                    retclear
                  ) {
                    document
                      .querySelector(".success")
                      .classList.remove("hidden");
                  } else {
                    document
                      .querySelector(".failure")
                      .classList.remove("hidden");
                  }
                } else {
                  document.querySelector(".failure").classList.remove("hidden");
                }
              });
            } else {
              document.querySelector(".failure").classList.remove("hidden");
            }
          });
        } else {
          document.querySelector(".failure").classList.remove("hidden");
        }
      });
    }
  }
};
</script>
```
#### Add a vue.config.js file 
Add a vue.config.js file in your project root folder which should contain

```
// vue.config.js
module.exports = {
  baseUrl: "./"
};
```

The modification of the baseUrl is required to have the Electron App working;

### Build your project

#### Create the *dist* folder with the built files
```bash
npm run build
```

#### Adding Platforms
```bash
npx cap add android
npx cap add ios
npx cap add electron
```

#### Building App for Targeted Platforms
```bash
npx cap update
npm run build
npx cap copy
npx cap copy web
```

##### Web Platform
```bash
npm run serve
```

open your browser http://localhost:8080 

##### IOS Platform
```bash
npx cap open ios
```

Xcode will be opened with your project and will index the files. When completed, select your apple device or emulator and click on the run button. The application should display four buttons. Click on them

##### Android Platform
```bash
npx cap open android
```

Android Studio will be opened with your project and will sync the files.
In Android Studio go to the file MainActivity in app/java/com.example.vuecapacitordatastoragesqlite and modified as follows

```
package com.example.vuecapacitordatastoragesqlite;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.jeep.plugin.capacitor.capacitordatastoragesqlite.CapacitorDataStorageSqlite;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CapacitorDataStorageSqlite.class);
    }});
  }
}

```
Sync Project with Gradle Files
Build Clean Project
Setup the SDK, i used the Android API 27 platform
and make Update when asked

When all this is done and your buid is succesful, click on the run project button and select your device or emulator, the application will launch and display four buttons.

##### Electron platform
```bash 
npx cap open electron 
``` 
or 

```bash
cd electron
npm run electron:start
```

In this release, the electron platform does not work, the bug has been reported to the Ionic Capacitor team.

