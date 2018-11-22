<template>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <!--<v-toolbar-title>Title</v-toolbar-title>-->
        <!--<v-spacer></v-spacer>-->
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
    </v-toolbar>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            links: [
                'Home',
                'About Us',
                'Team',
                'Services',
                'Blog',
                'Contact Us'
            ]
        })
    }
</script>

<style scoped>

</style>