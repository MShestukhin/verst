<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-list two-line subheader>
                    <v-subheader inset>Полимерные трубы</v-subheader>

                    <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            avatar
                            @click=""
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-subheader inset>Аппарат для сварки полиэтиленовых труб</v-subheader>

                    <v-list-tile
                            v-for="item in items2"
                            :key="item.title"
                            avatar
                            @click=""
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>

                    <v-subheader inset>Фитинги полиэтиленовые и комплектующие</v-subheader>

                    <v-list-tile
                            v-for="item in items3"
                            :key="item.title"
                            avatar
                            @click=""
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>

                    <v-subheader inset>Запорно-регулирующая арматура</v-subheader>

                    <v-list-tile
                            v-for="item in items4"
                            :key="item.title"
                            avatar
                            @click=""
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>
                    <v-divider inset></v-divider>

                    <v-subheader inset>Полиэтиленовые колодцы и резервуары</v-subheader>

                    <v-list-tile
                            v-for="item in items5"
                            :key="item.title"
                            avatar
                            @click=""
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
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
                    { avatar: 'http://www.polyplastic.ru/upload/production/menu/gost_water.jpg', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Водоснабжение', subtitle: '' },
                    { avatar: 'http://www.polyplastic.ru/upload/production/menu/gost_gas.jpg',icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Газоснабжение', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar3.png', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Канализация', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/drenazhlogo.png', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Дренаж', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar4.png', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'С защитной оболочкой PROSAFE', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar5.png', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Теплоснабжение', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar5.png', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Кабельные сети', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar17.png', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Напорные ПВХ', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/truba-spiral-new.png', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Сперальновитая техстрой СВТ', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/er11.jpg', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Система для релайнинга', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/TrubaMultiDex/multitehlogo.png', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Многослойные трубы Мультитех', subtitle: '' }
                ],
                items2: [
                    { avatar: 'http://tehstroi.ru/images/tovar31.png',icon: 'assignment', iconClass: 'blue white--text', title: 'Аппараты для электромуфтовой сварки', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar32.png',icon: 'call_to_action', iconClass: 'amber white--text', title: 'Стыковые сварочные аппараты', subtitle: '' }
                ],
                items3: [
                    { avatar: 'http://tehstroi.ru/images/tovar131.png', icon: 'assignment', iconClass: 'blue white--text', title: 'Сегментные фитинги ПЭ', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar133.png', icon: 'call_to_action', iconClass: 'amber white--text', title: 'Фитинги из гофрированных труб', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/lityefitingilogo.png', icon: 'call_to_action', iconClass: 'amber white--text', title: 'Литые фитинги', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar135.png', icon: 'call_to_action', iconClass: 'amber white--text', title: 'Электросварные фитинги', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar136.jpg', icon: 'call_to_action', iconClass: 'amber white--text', title: 'Технологические заглушки', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/ncpc/ncpc-logo.png', icon: 'call_to_action', iconClass: 'amber white--text', title: 'НСПС', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/tovar131.png', icon: 'call_to_action', iconClass: 'amber white--text', title: 'Вытянутый тройник', subtitle: '' }
                ],
                items4: [
                    { avatar: 'http://tehstroi.ru/images/tovar41.png', icon: 'assignment', iconClass: 'blue white--text', title: 'Задвижки с обрезным клином', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/1.png', icon: 'assignment', iconClass: 'blue white--text', title: 'Ножевые/шиберные задвижки', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/2.png', icon: 'assignment', iconClass: 'blue white--text', title: 'Поворотно-дисковые затворы ', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/3.png', icon: 'assignment', iconClass: 'blue white--text', title: 'Клапаны и фильтры', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/4.png', icon: 'assignment', iconClass: 'blue white--text', title: 'Соединительная арматура', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/phocagallery/Zap-Reg-Armatura/5.png', icon: 'assignment', iconClass: 'blue white--text', title: 'Задвижки с обрезиненным клином для газа', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/flanci/naleclogo.png', icon: 'call_to_action', iconClass: 'amber white--text', title: 'Фланцы', subtitle: '' }
                ],
                items5: [
                    { avatar: 'http://tehstroi.ru/images/1.png', icon: 'assignment', iconClass: 'blue white--text', title: 'Лотковые', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/2.png', icon: 'assignment', iconClass: 'blue white--text', title: 'Ливневый колодец (безлотковый)', subtitle: '' },
                    { avatar: 'http://tehstroi.ru/images/4.png', icon: 'call_to_action', iconClass: 'amber white--text', title: 'Резервуары для хранения питьевой воды ', subtitle: '' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>