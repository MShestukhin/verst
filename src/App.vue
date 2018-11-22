<template>
  <v-app>
    <!--<v-toolbar app>-->
      <!--<v-toolbar-title class="headline text-uppercase">-->
        <!--<span>Vuetify</span>-->
        <!--<span class="font-weight-light">MATERIAL DESIGN</span>-->
      <!--</v-toolbar-title>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-btn-->
        <!--flat-->
        <!--href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
        <!--target="_blank"-->
      <!--&gt;-->
        <!--<span class="mr-2">Latest Release</span>-->
      <!--</v-btn>-->
    <!--</v-toolbar>-->

    <Header/>
    <v-content>

      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex  d-flex xs8>
            <Carousels/>
          </v-flex>
        </v-layout>
        <ItemGroups/>
        <SisonSeil/>
      </v-container>

      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex  d-flex xs8>
            <Texts/>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md text-xs-center>
        <div class="row centered">
          <h1>Техстрой это:</h1>
        </div>
        <v-layout align-center justify-center>
          <v-flex  d-flex xs8>
            <SibStroyNumb/>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md text-xs-center>
        <div class="row centered">
            <h1>Техстрой это:</h1>
        </div>
        <v-layout align-center justify-center>
          <v-flex  d-flex xs16>
            <ThisSibstroy/>
          </v-flex>
        </v-layout>
        <SisonSeil/>
      </v-container>



    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousels from "./components/carousels";
import ItemGroups from "./components/ItemGroups";
import Texts from "./components/Texts";
import SibStroyNumb from "./components/SibStroyNumb";
import ThisSibstroy from "./components/ThisSibstroy";
import SisonSeil from "./components/SisonSeil";
export default {
  name: 'App',
  components: {
      SisonSeil,
      ThisSibstroy,
      SibStroyNumb,
      Texts,
      ItemGroups,
      Carousels,
      Header,
      Footer,
      HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
