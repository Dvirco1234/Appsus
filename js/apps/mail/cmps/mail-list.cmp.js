import mailPreview from '../cmps/mail-preview.cmp.js'
import mailDetails from '../pages/mail-details.cmp.js'

export default {
    props: ['mails'],
    template: `
    <section v-if="!isMailOpen" class="mail-list mail-list-layout">
        <table >
            <tbody>
                <tr v-for="mail in mails" :key="mail.id" class="mail-preview-container"
                @click1="select(mail.id)">
                    <mail-preview :mail="mail" @deleted="deleted" @save="saveMail" 
                    @fullMail="showFullMail" @toTrash="mailToTrash"/>
                </tr>
            </tbody>
        </table>
    </section>
    <section v-else class="mail-details mail-list-layout">
        <mail-details :mail="currMail" @back="isMailOpen = false" @deleted="deleted"/>
    </section>
    `,
    components: {
        mailPreview,
        mailDetails,
    },
    data() {
        return {
            isMailOpen: false,
            currMail: null,
        }
    },
    methods: {
        deleted(mailId) {
            this.$emit('deleted', mailId)
        },
        saveMail(mail) {
            this.$emit('save', mail)
        },
        showFullMail(mail) {
            console.log(mail);
            this.isMailOpen = true
            this.currMail = mail
        },
        mailToTrash(mail) {
            this.$emit('toTrash', mail)
        },
    },
    computed: {},
}
