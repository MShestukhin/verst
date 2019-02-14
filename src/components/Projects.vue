<template>
            <v-card>
                <v-toolbar color="gray" dark>
                    <v-toolbar-title class="orange--text">Проекты</v-toolbar-title>
                </v-toolbar>
                <v-layout row>
                    <v-flex xs6>
                        <v-container>
                            <v-img
                                    :src="imgGros"
                                    aspect-ratio="2.75"
                            ></v-img>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{card_text}}</h3>

                                </div>
                            </v-card-title>

                            <v-card-actions>
                                <v-btn flat color="orange">Читать дальше</v-btn>
                            </v-card-actions>
                        </v-container>
                    </v-flex>
                    <v-flex xs6>

                        <v-list three-line>
                            <template v-for="(item, index) in items">
                                <v-subheader
                                        v-if="item.header"
                                        :key="item.header"
                                >
                                    {{ item.header }}
                                </v-subheader>

                                <v-divider
                                        v-else-if="item.divider"
                                        :inset="item.inset"
                                        :key="index"
                                ></v-divider>

                                <v-list-tile
                                        v-else
                                        :key="item.title"
                                        avatar
                                        @click=""
                                >
                                    <v-list-tile-avatar>
                                        <img :src="item.avatar">
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                        <!--<v-list-tile-title v-html="item.title"></v-list-tile-title>-->
                                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </template>
                        </v-list>
                    </v-flex>

                </v-layout>
            </v-card>
        </v-flex>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                card_text: 'Участие в строительстве и поставке материалов для рудника Гросс',
                imgGros: location.protocol + "//" + location.host + '/static/img/LA.jpg',
                items: [
                    {header: 'Сегодня'},
                    {
                        avatar: location.protocol + "//" + location.host + '/static/img/RUD.jpg',
                        title: 'Новый Ледовый Дворец',
                        subtitle: "Строительство объекта \"Ледовая Арена\" в Иркутске"
                    }
                    // {divider: true, inset: true},
                    // {
                    //     avatar: 'http://www.polyplastic.ru/upload/projects/2018/ekad_1.jpg',
                    //     title: 'Oui oui',
                    //     subtitle: "Строительство улиц № 1, № 3, № 7 для жилой застройки территории, ограниченной: коридор ВЛ- ул. 2-я Новосибирская – ЕКАД. Жилой район «Солнечный»"
                    // },
                ]
            }
        }
    }
</script>

<style scoped>

</style>