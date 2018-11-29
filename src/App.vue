<template>
  <v-app>
    <Header/>

    <v-content>

      <v-container fluid >
        <v-layout align-center justify-center>
          <v-flex  d-flex xs8 align-center justify-center>
            <Carousels/>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid >
      <v-layout align-center justify-center>
        <v-flex  d-flex xs10>
          <ItemGroups/>
        </v-flex>
      </v-layout>
      </v-container>
      <SisonSeil/>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex  d-flex xs10>
            <Texts/>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md text-xs-center>
        <div class="row centered">
          <h1>Техстрой в цифрах</h1>
        </div>
        <p/>
        <v-layout align-center justify-space-around row fill-height>
          <v-flex  d-flex xs16>
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
        <SibStrTrust/>
      </v-container>

      <v-container grid-list-md text-xs-center>
        <div class="row centered">
          <h1>Нам доверяют</h1>
        </div>
        <v-layout align-center justify-center>
          <v-flex  d-flex xs16>
            <UsTrusted/>
          </v-flex>
        </v-layout>
      </v-container>

    <v-container grid-list-md text-xs-center>
      <about-us/>
      <v-layout align-center justify-center>
        <v-flex  d-flex xs16>
          <YundexMap/>
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
import ThisSibstroy from "./components/ThisSibstroy";
import SisonSeil from "./components/SisonSeil";
import UsTrusted from "./components/UsTrusted";
import YundexMap from "./components/YundexMap";
import AboutUs from "./components/AboutUs";
import SibStrTrust from "./components/SibStrTrust";
export default {
  name: 'App',
  components: {
      SibStrTrust,
      AboutUs,
      YundexMap,
      UsTrusted,
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
  }
}
</script>
