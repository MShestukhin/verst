<template>
    <form
            ref="form">

        <v-text-field
                v-model="name"
                label="Имя"
                :error-messages="nameErrors"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
        ></v-text-field>

        <v-text-field
                v-model="phone"
                :error-messages="phoneErrors"
                required
                label="Телефон"
                mask="phone"
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
        ></v-text-field>

        <v-btn @click="submit">Отправить</v-btn>
        <v-btn @click="clear">Очистить</v-btn>
    </form>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email } from 'vuelidate/lib/validators'
    import axios from 'axios'
    import Vue from 'vue'
    // var nodemailer = require('nodemailer');
    // const net = require('net');
    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'sibtrade.tech@gmail.com',
    //         pass: 'wz2egnb9'
    //     }
    // });
    //
    // var mailOptions = {
    //     from: 'sibtrade.tech@gmail.com',
    //     to: 'shist95@mail.ru',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    // };

    export default {
        mixins: [validationMixin],
        name: "SendForm",
        validations: {
            name: { required },
            phone: { required },
            select: { required }
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
            checkboxErrors () {
                const errors = []
                if (!this.$v.checkbox.$dirty) return errors
                !this.$v.checkbox.checked && errors.push('You must agree to continue!')
                return errors
            },
            selectErrors () {
                const errors = []
                if (!this.$v.select.$dirty) return errors
                !this.$v.select.required && errors.push('Item is required')
                return errors
            },
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
                !this.$v.name.required && errors.push('Name is required.')
                return errors
            },
            phoneErrors () {
                const errors = []
                if (!this.$v.phone.$dirty) return errors
                !this.$v.phone.phone && errors.push('Must be valid phone')
                !this.$v.phone.required && errors.push('Phone is required')
                return errors
            }
        },

        methods: {
            submit () {
                this.$v.$touch();
                axios.get('http://localhost:4444/', {
                    method: 'GET',
                    mode: 'no-cors',
                    // headers: {
                    //     'Access-Control-Allow-Origin': '*',
                    //     'Access-Control-Allow-Origin': 'Origin',
                    //     'Access-Control-Allow-Origin': 'X-Requested-With',
                    //     'Access-Control-Allow-Origin': 'Content-Type',
                    //     'Access-Control-Allow-Origin': 'Accept',
                    //     'Content-Type': 'application/json'
                    // },
                    withCredentials: true,
                    credentials: 'same-origin'
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log('tut');
                        console.log(error);
                    });
            },
            clear () {
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