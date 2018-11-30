<template>
    <v-toolbar  :scroll-toolbar-off-screen="true">
        <!--<v-toolbar-title>Title</v-toolbar-title>-->
        <!--<v-spacer></v-spacer>-->
        <v-layout align-center justify-center row >
            <v-toolbar-items class="hidden-sm-and-down">
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title class="black--text">Title</v-toolbar-title>
            </v-toolbar-items>
            <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                    v-for="link in links"
                    :key="link"
                    color="black"
                    flat
                    round
            >
                {{ link }}
            </v-btn>
        </v-toolbar-items>
        </v-layout>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            links: [
                'Главная',
                'Продукция',
                'Услуги',
                'Производство',
                'Прайс-листы',
                'Пресс-центр',
                'О компании',
                'Контакты'
            ]
        })
    }
</script>

<style scoped>

</style>