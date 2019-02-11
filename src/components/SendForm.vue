<template>
    <form>
        <v-text-field
                v-model="name"
                label="Имя"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
        ></v-text-field>

        <v-text-field
                v-model="phone"
                label="Phone number"
                mask="phone"
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
        ></v-text-field>

        <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Услуга"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
        ></v-select>

            <v-textarea
                    name="note"
                    label="Комментарий"
                    value=""
                    @change="$v.note.$touch()"
                    @blur="$v.note.$touch()"
            ></v-textarea>

        <v-btn @click="submit">Отправить</v-btn>
        <v-btn @click="clear">Очистить</v-btn>
    </form>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email } from 'vuelidate/lib/validators'
    export default {
        mixins: [validationMixin],
        name: "SendForm",
        validations: {
            name: { required, maxLength: maxLength(10) },
            select: { required },
            checkbox: {
                checked (val) {
                    return val
                }
            }
        },
        data: () => ({
            name: '',
            phone: '',
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4'
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
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            }
        },

        methods: {
            submit () {
                this.$v.$touch()

            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = false
            }
        }
    }
</script>

<style scoped>

</style>