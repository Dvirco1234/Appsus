import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
        <table>
            <tbody>
                <tr v-for="mail in mails" :key="mail.id" class="mail-preview-container"
                @click="select(mail.id)">
                    <mail-preview :mail="mail"/>
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
        // remove(bookId) {
        //     this.$emit('removed', bookId)
        // },
        // select(book) {
        //     this.$emit('selected', book)
        // },
    },
    computed: {},
}
