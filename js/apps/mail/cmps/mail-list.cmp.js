import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
        <table>
            <tbody>
                <tr v-for="mail in mails" :key="mail.id" class="mail-preview-container"
                @click1="select(mail.id)">
                    <mail-preview :mail="mail" @deleted="deleted" @save="saveMail"/>
                </tr>
            </tbody>
        </table>
    </section>
    `,
    components: {
        mailPreview,
    },
    data() {
        return {}
    },
    methods: {
        deleted(mailId) {
            this.$emit('deleted', mailId)
        },
        saveMail(mail) {
            this.$emit('save', mail)
        },
    },
    computed: {},
}
