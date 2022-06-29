import { mailService } from '../services/mail-service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter-cmp.js'
// import bookDetails from '../views/book-details.cmp.js'
// import { eventBus } from '../services/eventBus-service.js'

export default {
    template: `
        <section>
            <h1>hi hi hi</h1>
            <mail-filter :mails="mails"/>
            <mail-list :mails="mails"/>
        </section>
    `,
    components: {
        mailList,
        mailFilter,
    },
    data() {
        return {
            mails: [],
        }
    },
    created() {
        mailService.query().then(mails => this.mails = mails)
    },
    methods: {},
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.mails.filter((mail) => regex.test(mail.title))
        },
    },
    unmounted() {},
}
