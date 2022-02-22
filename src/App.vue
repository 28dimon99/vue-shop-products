<template>
  <div id="app">
    <v-app>
      <Header/>
      <v-main>
        <v-container>
          <router-view class="view"></router-view>
        </v-container>
      </v-main>
      <Footer/>
    </v-app>
  </div>
</template>

<script>

import Header from "./components/Header";
import Footer from "./components/Footer";

export default {

  name: 'App',
  components:{
    Header, Footer
  }


};
</script>
