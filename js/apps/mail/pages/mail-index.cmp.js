import { mailService } from '../services/mail-service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailSearchFilter from '../cmps/mail-search-filter.cmp.js'
import mailNavFilter from '../cmps/mail-nav-filter.cmp.js'
import composeMail from '../cmps/compose-mail.cmp.js'
// import bookDetails from '../views/book-details.cmp.js'
// import { eventBus } from '../services/eventBus-service.js'

export default {
    template: `
        <section class="main-layout">
            <mail-search-filter @filtered="filterMails" :mails="mails"/>
            <button class="compose-btn" @click="isComposing = !isComposing">+ Compose</button>
            <compose-mail v-if="isComposing"/>
            <div class="main-section flex">
                <mail-nav-filter @filtered="filterMails" :mails="mails"/>
                <mail-list :mails="mailsToShow"/>
            </div>
        </section>
    `,
    components: {
        mailList,
        mailSearchFilter,
        mailNavFilter,
        composeMail,
    },
    data() {
        return {
            mails: [],
            filterBy: null,
            isComposing: false,
        }
    },
    created() {
        mailService.query().then((mails) => (this.mails = mails))
    },
    methods: {
        filterMails(filter, filterBy = 'txt') {
            if(!filter) return 
            if(!this.filterBy) this.filterBy = {}
            this.filterBy[filterBy] = filter
        },
        // filterMails(filter, filterBy) {
        //     if(!this.filterBy) this.filterBy = {}
        //     this.filterBy[filterBy] = filter
        // },
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails
            const regex = new RegExp(this.filterBy.txt, 'i')
            let mails = this.mails
            mails = mails.filter((mail) => regex.test(mail.subject) || regex.test(mail.body))
            // mails = mails.filter((mail) => regex.test(mail.subject) || regex.test(mail.body))
            return mails
        },
        // mailsToShow() {
        //     if (!this.filterBy) return this.mails
        //     const regex = new RegExp(this.filterBy.txt, 'i')
        //     return this.mails.filter(
        //         (mail) => regex.test(mail.subject) || regex.test(mail.body)
        //     )
        // },
    },
    unmounted() {},
}
