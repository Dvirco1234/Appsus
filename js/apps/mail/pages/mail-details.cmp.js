import { mailService } from '../services/mail-service.js'

export default {
    props: ['mail'],
    template: `
        <section class="full-mail-container" v-if="mail">
            <button class="back-btn" @click="backToList" title="Back to inbox">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <button class="delete-btn" @click="deleteMail" title="Delete mail">
                <span class="material-symbols-outlined">delete</span>
            </button>
            <h2>{{mail.subject}}
                <span v-if="mail.isLabeled" class="material-symbols-outlined checked">
                    label_important
                </span>
            </h2>
            <p>&lt;{{mail.to}}&gt;</p>
            <pre>{{mail.body}}</pre>
        </section>
    `,
    data() {
        return {}
    },
    created() {
        // const id = this.$route.params.mailId
        // mailService.get(id).then((mail) => (this.mail = mail))
    },
    methods: {
        backToList() {
            this.$emit('back')
        },
        deleteMail() {
            this.$emit('deleted', this.mail.id)
            this.backToList()
        },
    },
    computed: {},
    unmounted() {},
}
