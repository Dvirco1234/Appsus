import { mailService } from '../services/mail-service.js'
import { showSuccessMsg } from '../../../services/eventBus-service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailSearchFilter from '../cmps/mail-search-filter.cmp.js'
import mailNavFilter from '../cmps/mail-nav-filter.cmp.js'
import composeMail from '../cmps/compose-mail.cmp.js'
// import bookDetails from '../views/book-details.cmp.js'
// import { eventBus } from '../services/eventBus-service.js'

export default {
    template: `
        <section class="main-layout">
            <mail-search-filter @filtered="searchFilter" :mails="mails"/>
            <!-- <mail-search-filter @filtered="filterMails" :mails="mails"/> -->
            <button class="compose-btn flex space-between align-center" @click="isComposing = !isComposing">
                <span class="material-symbols-outlined">
                    add
                </span> Compose</button>
            <compose-mail v-if="isComposing" @sent="sendMail" @saveDraft="saveMailDraft" 
            :draft="draft" @closed="toggleCompose"/>
            <div class="main-section flex">
                <mail-nav-filter @filtered="navFilter" :mails="mails"/>
                <mail-list :mails="mailsToShow" @deleted="deleteMail"/>
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
            // filterBy: null,
            isComposing: false,
            draft: null,
            filterSearch: '',
            filterNav: null,
        }
    },
    created() {
        mailService.query().then((mails) => (this.mails = mails))
    },
    methods: {
        // filterMails(filter, filterBy = 'txt') {
        //     if(!filter) return 
        //     if(!this.filterBy) this.filterBy = {}
        //     this.filterBy[filterBy] = filter
        // },
        searchFilter(filterTxt) {
            this.filterSearch = filterTxt
        },
        navFilter(by) {
            this.filterNav = by
        },
        deleteMail(id) {
            mailService.remove(id)
            .then(() => {
                console.log('delete success');
                showSuccessMsg('Deleted successfully')
                const idx = this.mails.findIndex((mail) => mail.id === id)
                this.mails.splice(idx, 1)
            })
        },
        // filterMails(filter, filterBy) {
        //     if(!this.filterBy) this.filterBy = {}
        //     this.filterBy[filterBy] = filter
        // },
        sendMail(mail) {
            mailService.sendMail(mail)
                .then(() => {
                    console.log('send success');
                    showSuccessMsg('Sent successfully')
                    this.mails.unshift(mail)
                })
            this.isComposing = !this.isComposing
        },
        saveMailDraft(draft) {
            mailService.saveDraft(draft)
                .then(() => {
                    this.draft = draft
                })
        },
        toggleCompose() {
            this.isComposing = !this.isComposing
        },
    },
    computed: {
        mailsToShow() {
            let mails = this.mails
            if(!this.filterSearch) mails = this.mails
            const regex = new RegExp(this.filterSearch, 'i')
            mails = mails.filter((mail) => regex.test(mail.subject) || regex.test(mail.body))
            const nav = this.filterNav
            if(nav === 'all') mails = mails
            else if(nav === 'inbox') mails = mails.filter((mail) => !mail.isDraft)
            else if(nav === 'starred') mails = mails.filter((mail) => mail.isStarred)
            else if(nav === 'sent') mails = mails.filter((mail) => mail.isSent)
            else if(nav === 'drafts') mails = mails.filter((mail) => mail.isDraft)

            
            return mails
        },
        // mailsToShow() {
        //     if (!this.filterBy) return this.mails
        //     const regex = new RegExp(this.filterBy.txt, 'i')
        //     let mails = this.mails
        //     mails = mails.filter((mail) => regex.test(mail.subject) || regex.test(mail.body))
        //     // mails = mails.filter((mail) => regex.test(mail.subject) || regex.test(mail.body))
        //     return mails
        // },

        // carsForDisplay() {
        //     var cars = this.cars
        //     if (this.filterBy?.vendor) {
        //         const regex = new RegExp(this.filterBy.vendor, 'i')
        //         cars = cars.filter(car => regex.test(car.vendor))
        //     }
        //     if (this.filterBy?.minSpeed) {
        //         cars = cars.filter(car => car.maxSpeed >= this.filterBy.minSpeed)
        //     }
        //     return cars
        // }
    },
    unmounted() {},
}
