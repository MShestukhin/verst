<template>
        <!--<v-layout row wrap>-->
                    <form
                            ref="form">
                        <v-card class="elevation-12">
                            <v-flex align-center justify-center>
                            <v-toolbar dark color="orange">
                                <!--<v-toolbar-title>-->
                                    <h3>Оставьте свои контакты и мы Вам перезвоним!</h3>
                                <!--</v-toolbar-title>-->
                            </v-toolbar>

                        <v-text-field
                                v-model="name"
                                label="Имя"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                        ></v-text-field>
                        <!--mask="phone"-->
                        <v-text-field
                                v-model="phone"
                                mask="phone"
                                prefix=" +7 "
                                required
                                label="Телефон"
                                @input="$v.phone.$touch()"
                                @blur="$v.phone.$touch()"
                        ></v-text-field>

                        <v-btn @click="submit">Отправить</v-btn>
                        <v-btn @click="clear">Очистить</v-btn>
                            </v-flex>
                        </v-card>
                    </form>
            <!--</v-flex>-->
        <!--</v-layout>-->
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, maxLength, email} from 'vuelidate/lib/validators'
    import axios from 'axios'
    import Vue from 'vue'

    export default {
        mixins: [validationMixin],
        name: "SendForm",
        validations: {
            name: {required},
            phone: {required},
            select: {required}
        },
        data: () => ({
            valid: true,
            name: '',
            phone: '',
            select: null,
            items: [
                'Водоснабжение',
                'Водоотведение',
                'Газораспределение',
                'Трубы в теплоизоляции'
            ],
            checkbox: false
        }),

        computed: {
            nameErrors() {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
                !this.$v.name.required && errors.push('Name is required.')
                return errors
            },
            phoneErrors() {
                const errors = []
                if (!this.$v.phone.$dirty) return errors
                !this.$v.phone.phone && errors.push('Must be valid phone')
                !this.$v.phone.required && errors.push('Phone is required')
                return errors
            }
        },

        methods: {
            submit() {
                this.$v.$touch();
                const formData = new FormData();
                console.log(this.$v.name.$model);
                console.log(this.$v.phone.$model);
                formData.append("name", this.$v.name.$model);
                axios.post('/app/send.php',
                    {
                        name: this.$v.name.$model,
                        phone: this.$v.phone.$model
                        //     method: 'GET',
                        //     mode: 'no-cors',
                        //     headers: {
                        //         'Access-Control-Allow-Origin': '*',
                        //         'Access-Control-Allow-Origin': 'Origin',
                        //         'Access-Control-Allow-Origin': 'X-Requested-With',
                        //         'Access-Control-Allow-Origin': 'Content-Type',
                        //         'Access-Control-Allow-Origin': 'Accept',
                        //         'Content-Type': 'application/json'
                        //     },
                        //     withCredentials: true,
                        //     credentials: 'same-origin'
                    })
                    .then(function (response) {
                        this.$v.$reset();
                        this.name = '';
                        this.phone = '';
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log('tut');
                        console.log(error);
                    });
            },
            clear() {
                this.$v.$reset()
                this.name = ''
                this.phone = ''
                this.select = null
                this.checkbox = false
            }
        }
    }
</script>

<style scoped>

</style>