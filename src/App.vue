<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
   
    </v-app-bar> -->

    <v-content>
    <SideBar></SideBar>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import SideBar from '@/components/SideBar1.vue'


export default {
  name: 'App',

  components: {
    HelloWorld,
    SideBar
  },

  data: () => ({
    //
  }),
};
</script>
