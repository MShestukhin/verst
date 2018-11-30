<template>
        <v-carousel hide-delimiters :interval="8000" height="700" cycle="false">
            <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
            >

                <!--<v-img-->
                        <!--:src="item.src"-->
                <!--&gt;</v-img>-->
                <v-layout align-end justify-start row fill-height>
                <v-card max-height  max-width
                >
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{item.title}}</h3>
                        </div>
                        <v-card-actions>
                            <v-btn flat color="orange">Подробнее</v-btn>
                            <v-btn flat color="orange">Скачать прайс</v-btn>
                        </v-card-actions>
                    </v-card-title>
                </v-card>
                </v-layout>
            </v-carousel-item>

        </v-carousel>
</template>

<script>
    export default {
        name: "carousels",
        data () {
            return {
                items: [
                    {
                        src: 'https://sdelanounas.ru/i/d/3/d/d3d3LnNkZWxhbm91bmFzLnJ1L3VwbG9hZHMvNi81LzY1NjE0MjQzNzE4NjVfb3JpZy5qcGVnP19faWQ9NTcwMzE=.jpg',
                        title: "Заводы по производству труб"
                    },
                    {
                        src: 'http://optimapipe.ru/images/w689-h345/20180627/3a0456431aaac0aec313168ebc606ed7.jpg',
                        title:"Многослойные трубы \"МультиТех\""
                    },
                    {
                        src: 'https://www.calc.ru/imgs/articles3/15/04/68857256fef30289d393.76730355.jpg',
                        title:"Гофрированная труба"
                    },
                    {
                        src: 'http://optimapipe.ru/images/w689-h345/20150605/dd5d954f27e4a37754bbb83a4fb3a0e5.JPG',
                        title: "ТРУБЫ PROSAFE"
                    },
                    {
                        src: 'https://www.germesgroup.com/Product/IMG_3694.jpg',
                        title: "Спиральновитые трубы"
                    },
                    {
                        src: 'http://innoformula.ru/thumb/0tjZOuKzWC7oVxIqSSIILw/580r450/1620328/fitingi.jpg',
                        title: "Фитинги и запорная арматура"
                    },
                    {
                        src: 'http://p154.ru/images/protect-catalog-1024x1024_1/item/i3vul3bomm.jpg',
                        title: "Трубы ТЕХСТРОЙ TR"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>