
<template>
    <!--<v-layout row>-->
        <!--<v-flex xs12 sm6>-->
            <v-card>
                <v-toolbar color="gray" dark>

                    <v-toolbar-title>Новости</v-toolbar-title>
                </v-toolbar>

                <v-list two-line>
                    <template v-for="(item, index) in items">
                        <!--<v-list-tile-->
                                <!--:key="item.title"-->
                                <!--avatar-->
                                <!--ripple-->
                                <!--@click="toggle(index)"-->
                        <!--&gt;-->
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <!--<v-list-tile-sub-title class="text&#45;&#45;primary">{{ item.headline }}</v-list-tile-sub-title>-->
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                        <!--</v-list-tile>-->
                        <v-divider
                                v-if="index + 1 < items.length"
                                :key="index"
                        ></v-divider>
                    </template>
                </v-list>
            </v-card>
        <!--</v-flex>-->
    <!--</v-layout>-->
</template>

<script>
    export default {
        name: "News",
        data () {
            return {
                selected: [2],
                items: [
                    {
                        action: '15 min',
                        headline: 'Brunch this weekend?',
                        title: '27 ноября 2018',
                        subtitle: "Обособленное подразделение ПОЛИПЛАСТИК Юг на «ЮГАГРО-2018»"
                    },
                    {
                        action: '2 hr',
                        headline: 'Summer BBQ',
                        title: '27 ноября 2018',
                        subtitle: "В реконструкции Омского нефтеперерабатывающего завода принял..."
                    },
                    {
                        action: '6 hr',
                        headline: 'Oui oui',
                        title: '26 ноября 2018',
                        subtitle: 'Продукция ПОЛИПЛАСТИК Поволжье успешно используется в крупных...'
                    },
                    {
                        action: '12 hr',
                        headline: 'Birthday gift',
                        title: '26 ноября 2018',
                        subtitle: 'ПОЛИПЛАСТИК Поволжье поздравил фермеров и работников сельского...'
                    }
                ]
            }
        },

        methods: {
            toggle(index) {
                const i = this.selected.indexOf(index)

                if (i > -1) {
                    this.selected.splice(i, 1)
                } else {
                    this.selected.push(index)
                }
            }
        }
}
</script>

<style scoped>

</style>