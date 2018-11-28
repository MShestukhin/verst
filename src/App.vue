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
        <SisonSeil/>
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

      <yandex-map
              :coords="[54.62896654088406, 39.731893822753904]"
              zoom="10"
              style="width: 600px; height: 600px;"
              :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
              :behaviors="['ruler']"
              :controls="['trafficControl']"
              :placemarks="placemarks"
      map-type="hybrid"
      @map-was-initialized="initHandler"
      >

      <ymap-marker
              marker-type="placemark"
              :coords="[54.7, 39.7]"
              hint-content="Hint content 1"
              :balloon="{header: 'header', body: 'body', footer: 'footer'}"
              :icon="{color: 'green', glyph: 'cinema'}"
              cluster-name="1"
      ></ymap-marker>

      <ymap-marker
              marker-type="placemark"
              :coords="[54.6, 39.8]"
              hint-content="Hint content 1"
              :balloon="{header: 'header', body: 'body', footer: 'footer'}"
              :icon="{color: 'green', glyph: 'cinema'}"
              cluster-name="1"
      ></ymap-marker>

      <ymap-marker
              marker-type="circle"
              :coords="[54.62896654088406, 39.731893822753904]"
              circle-radius="1600"
              hint-content="Hint content 1"
              :marker-fill="{color: '#000000', opacity: 0.4}"
              :marker-stroke="{color: '#ff0000', width: 5}"
              :balloon="{header: 'header', body: 'body', footer: 'footer'}"
      ></ymap-marker>

      </yandex-map>

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
export default {
  name: 'App',
  components: {
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
    return {
        placemarks: [
            {
                coords: [54.8, 39.8],
                properties: {}, // define properties here
                options: {}, // define options here
                clusterName: "1",
                callbacks: { click: function() {} }
            }
        ]
      //
    }
  }
}
</script>
