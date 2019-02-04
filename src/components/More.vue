<template>
    <v-layout align-content-center justify-center column>
    <!--<v-card>-->
        <v-container grid-list-xs text-xs-center >
        <!--<v-flex xs12>-->
            <v-container>
            <v-toolbar
                    card
                    color="orange"
                    dark
                    dense
            >
            <v-toolbar-title class="body-4">{{ title }}</v-toolbar-title>
            </v-toolbar>
        </v-container>
        <!--</v-flex>-->
            <!--<v-flex  xs12>-->
                <!--<v-layout d-flex>-->
                <v-container>
                <v-img
                        src='http://www.polyplastic.ru/upload/production/menu/gost_water.jpg'
                        height="400px"
                >
                </v-img>
                </v-container>
                <!--</v-layout>-->
            <!--</v-flex>-->
            <!--</v-flex>-->
        <v-card-text>
            {{ dsc }}
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-icon
                    large
                    @click=""
            >
                mdi-chevron-right
            </v-icon>
        </v-card-actions>
        </v-container>
    <!--</v-card>-->

    </v-layout>
</template>
<script>
    // import Carousels from "./carousels";
    import Carousels from "./carousels";
    export default {
        name: "More",
        props: ['title','dsc'],
        components: {Carousels}
    }
</script>


<style scoped>

</style>