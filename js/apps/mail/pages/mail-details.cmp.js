import { mailService } from '../services/mail-service.js'

export default {
    template: `
        <section>
            <h1 v-if="mail">id {{mail.id}}</h1>
        </section>
    `,
    data() {
        return {
            mail: null,
        }
    },
    created() {
        const id = this.$route.params.mailId
        mailService.get(id).then((mail) => (this.mail = mail))
    },
    methods: {},
    computed: {},
    unmounted() {},
}
