<template>
    <v-carousel hide-delimiters :interval="8000" height="150">
        <v-carousel-item
        >
            <v-layout row wrap>
            <v-flex xs2>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                ></v-img>
            </v-flex>
            </v-layout>
        </v-carousel-item>
        <v-carousel-item
        >
            <v-layout row wrap>
                <v-flex xs2>
                    <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            height="150px"
                    ></v-img>
                </v-flex>

                <v-flex xs2>
                    <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            height="150px"
                    ></v-img>
                </v-flex>

            </v-layout>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "UsTrusted",
        data(){
            return {
                item : 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            }
        }
    }
</script>

<style scoped>

</style>