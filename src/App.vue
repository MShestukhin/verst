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
      </v-container>
      <div class="container">
        <div class="row centered">
          <div class ="col-lg-8">
            <h1>Сезонная расспродажа фитингов</h1>
            <p>Нажмите и ознакомьтесь с прайс листом</p>
          </div>
        </div>
      </div>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex  d-flex xs8>
            <Texts/>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex  d-flex xs8>
            <h1>Техстрой в цифрах</h1>
            <SibStroyNumb/>
          </v-flex>
        </v-layout>
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
export default {
  name: 'App',
  components: {
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
