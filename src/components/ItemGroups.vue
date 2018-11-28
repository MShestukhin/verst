<template>
    <v-layout row wrap>
        <v-flex xs2>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                >
                    <div>
                        <div class="headline">Заводы по производству труб</div>
                    </div>
                </v-img>
            </v-card>
        </v-flex>
        <v-flex xs2>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                >
                    <div>
                        <div class="headline">Заводы по производству труб</div>
                    </div>
                </v-img>
            </v-card>
        </v-flex>
        <v-flex xs2>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                >
                    <div>
                        <div class="headline">Заводы по производству труб</div>
                    </div>
                </v-img>
            </v-card>
        </v-flex>
        <v-flex xs2>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                >
                    <div>
                        <div class="headline">Заводы по производству труб</div>
                    </div>
                </v-img>
            </v-card>
        </v-flex>
        <v-flex xs2>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                >
                    <div>
                        <div class="headline">Заводы по производству труб</div>
                    </div>
                </v-img>
            </v-card>
        </v-flex>
        <v-flex xs2>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                >
                    <div>
                        <div class="headline">Заводы по производству труб</div>
                    </div>
                </v-img>
            </v-card>
        </v-flex>
    </v-layout>

</template>


<script>
    export default {
        name: "ItemGroups",
        data: () => ({
            length: 3,
            onboarding: 0
        }),

        methods: {
            next () {
                this.onboarding = this.onboarding + 1 === length
                    ? 0
                    : this.onboarding + 1
            },
            prev () {
                this.onboarding = this.onboarding - 1 < 0
                    ? this.length - 1
                    : this.onboarding - 1
            }
        }

    }
</script>

<style scoped>

</style>