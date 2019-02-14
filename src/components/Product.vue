<template>
    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
            <v-card>
                <v-list two-line subheader>
                    <v-subheader inset>Полимерные трубы</v-subheader>

                    <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            avatar
                            @click="back(item.title, item.dsc, item.link)"
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-subheader inset>Аппарат для сварки полиэтиленовых труб</v-subheader>

                    <v-list-tile
                            v-for="item in items2"
                            :key="item.title"
                            avatar
                            @click="back(item.title, item.dsc, item.link)"
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>

                    <v-subheader inset>Фитинги полиэтиленовые и комплектующие</v-subheader>

                    <v-list-tile
                            v-for="item in items3"
                            :key="item.title"
                            avatar
                            @click="back(item.title, item.dsc, item.link)"
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>

                    <v-subheader inset>Запорно-регулирующая арматура</v-subheader>

                    <v-list-tile
                            v-for="item in items4"
                            :key="item.title"
                            avatar
                            @click="back(item.title, item.dsc, item.link)"
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>

                    </v-list-tile>
                    <v-divider inset></v-divider>

                    <v-subheader inset>Полиэтиленовые колодцы и резервуары</v-subheader>

                    <v-list-tile
                            v-for="item in items5"
                            :key="item.title"
                            avatar
                            @click="back(item.title, item.dsc, item.link)"
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Product",
        data () {
            return {
                items: [
                    {
                        avatar: 'http://www.polyplastic.ru/upload/production/menu/gost_water.jpg',
                        title: 'Водоснабжение',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://www.polyplastic.ru/upload/production/menu/gost_gas.jpg',
                        title: 'Газоснабжение',
                        dsc:'',
                        link:'',
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar3.png',
                        title: 'Канализация',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/drenazhlogo.png',
                        title: 'Дренаж',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar4.png',
                        title: 'С защитной оболочкой PROSAFE',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar5.png',
                        title: 'Теплоснабжение',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar5.png',
                        title: 'Кабельные сети',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar17.png',
                        title: 'Напорные ПВХ',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/truba-spiral-new.png',
                        title: 'Сперальновитая техстрой СВТ',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/er11.jpg',
                        title: 'Система для релайнинга',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/TrubaMultiDex/multitehlogo.png',
                        title: 'Многослойные трубы Мультитех',
                        dsc:'',
                        link:''
                    }
                ],
                items2: [
                    {
                        avatar: 'http://tehstroi.ru/images/tovar31.png',
                        title: 'Аппараты для электромуфтовой сварки',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar32.png',
                        title: 'Стыковые сварочные аппараты',
                        dsc:'',
                        link:''
                    }
                ],
                items3: [
                    {
                        avatar: 'http://tehstroi.ru/images/tovar131.png',
                        title: 'Сегментные фитинги ПЭ',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar133.png',
                        title: 'Фитинги из гофрированных труб',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/lityefitingilogo.png',
                        title: 'Литые фитинги',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar135.png',
                        title: 'Электросварные фитинги',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar136.jpg',
                        title: 'Технологические заглушки',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/ncpc/ncpc-logo.png',
                        title: 'НСПС',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar131.png',
                        title: 'Вытянутый тройник',
                        dsc:'',
                        link:''
                    }
                ],
                items4: [
                    {
                        avatar: 'http://tehstroi.ru/images/tovar41.png',
                        title: 'Задвижки с обрезным клином',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/tovar41.png',
                        title: 'Задвижки с обрезным клином',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/1.png',
                        title: 'Ножевые/шиберные задвижки',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/2.png',
                        title: 'Поворотно-дисковые затворы ',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/3.png',
                        title: 'Клапаны и фильтры',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/4.png',
                        title: 'Соединительная арматура',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/5.png',
                        title: 'Задвижки с обрезиненным клином для газа',
                        dsc:'',
                        link:''
                    },
                    {avatar: 'http://tehstroi.ru/images/flanci/naleclogo.png',
                        title: 'Фланцы',
                        dsc:'',
                        link:''
                    }
                ],
                items5: [
                    {avatar: 'http://tehstroi.ru/images/1.png',
                        title: 'Лотковые',
                        dsc:'',
                        link:''
                    },
                    {
                        avatar: 'http://tehstroi.ru/images/2.png',
                        title: 'Ливневый колодец (безлотковый)',
                        dsc:'',
                        link:''
                    },
                    {avatar: 'http://tehstroi.ru/images/4.png',
                        title: 'Резервуары для хранения питьевой воды ',
                        dsc:'',
                        link:''
                    }
                ]
            }
        },
        methods: {
            back(title, dsc, link) {
                this.$vuetify.goTo(0);
                console.log(link);
                if (dsc) {
                    this.$router.push({name: 'post', params: {title: title, dsc, link: link}});
                    // this.$router.push({path: 'post/'+c, props: {src, c, dsc}});
                    // this.$router.push({path: '/post/'+c+'/'+dsc, component: More,  query: { plan: 'private' }});
                } else if (link) {
                    this.$router.push({name: link});
                } else {
                    // this.$router.push({name: 'home'});
                }
                // if(v!='') {
                //     // var pdf = location.protocol + "//" + location.host+'/static/' + v;
                //     // window.open(pdf);
                // }
            }
        }
    }
</script>

<style scoped>

</style>