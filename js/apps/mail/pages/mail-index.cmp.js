import { mailService } from '../services/mail-service.js'
import { showSuccessMsg, eventBus } from '../../../services/eventBus-service.js'
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
            <div class="sort-mails">
                <select id="sort" v-model="sortBy" @change="sortMails">
                    <option value="sentAt">New</option>
                    <!-- <option value="sentAt-1">Old</option> -->
                    <option value="subject">Title (A-Z)</option>
                    <!-- <option value="subject-1">Title (Z-A)</option> -->
                </select>
            </div>
            <button class="compose-btn flex space-between align-center" @click="isComposing = !isComposing">
                <span class="material-symbols-outlined">add</span>Compose</button>
            <compose-mail v-if="isComposing" @sent="sendMail" @saveDraft="saveMailDraft" 
            :draft="draft" :note="note" @closed="toggleCompose" @deleteDraft="deleteMailDraft"/>
            <div class="main-section flex">
                <mail-nav-filter @filtered="navFilter" :mails="mails"/>
                <mail-list :mails="mailsToShow" @deleted="deleteMail" @save="saveMail" @toTrash="sendMailToTrash"/>
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
            isComposing: false,
            draft: null,
            filterSearch: '',
            filterNav: null,
            sortBy: null,
        }
    },
    created() {
        mailService.query().then((mails) => (this.mails = mails))
    },
    data() {
        return {
            mails: [],
            isComposing: false,
            draft: null,
            filterSearch: '',
            filterNav: null,
            sortBy: 'sentAt',
            note: null,
        }
    },
    mounted() {},
    created() {
        mailService.query().then((mails) => (this.mails = mails))
        this.unsubscribe = eventBus.on('sendNote', this.noteToMail)
    },
    methods: {
        searchFilter(filterTxt) {
            this.filterSearch = filterTxt
        },
        navFilter(by) {
            this.filterNav = by
        },
        deleteMail(id) {
            mailService.remove(id).then(() => {
                showSuccessMsg('Deleted successfully')
                const idx = this.mails.findIndex((mail) => mail.id === id)
                this.mails.splice(idx, 1)
            })
        },
        sendMail(mail) {
            mailService.sendMail(mail).then(() => {
                showSuccessMsg('Mail sent successfully')
                this.mails.unshift(mail)
            })
            this.isComposing = !this.isComposing
        },
        saveMailDraft(draft) {
            mailService.saveDraft(draft).then(() => {
                this.draft = draft
            })
        },
        deleteMailDraft(draftId) {
            mailService.remove(draftId)
        },
        sendMailToTrash(mail) {
            mailService.sendToTrash(mail).then(() => {
                showSuccessMsg('Mail sent to trash')
                // const idx = this.mails.findIndex((mail) => mail.id === id)
                // this.mails.splice(idx, 1)
            })
        },
        // deleteFromTrash(id) {
        //     mailService.removeFromTrash(id).then(() => {
        //         showSuccessMsg('Deleted from trash')
        //     })
        // },
        toggleCompose() {
            this.isComposing = !this.isComposing
        },
        saveMail(mail) {
            mailService.save(mail)
        },
        sortMails() {
            console.log(this.sortBy)
            mailService.sort(this.mails, this.sortBy)
        },
        noteToMail(noteInfo) {
            this.toggleCompose()
            this.note = noteInfo
        },
    },
    computed: {
        mailsToShow() {
            let mails = this.mails
            if (!this.filterSearch) mails = this.mails
            const regex = new RegExp(this.filterSearch, 'i')
            mails = mails.filter((mail) => regex.test(mail.subject) || regex.test(mail.body))
            const nav = this.filterNav
            if (nav === 'all') mails = mails
            else if (nav === 'inbox') mails = mails.filter((mail) => !mail.isDraft && !mail.isTrash)
            else if (nav === 'starred') mails = mails.filter((mail) => mail.isStarred && !mail.isTrash)
            else if (nav === 'sent') mails = mails.filter((mail) => mail.isSent && !mail.isTrash)
            else if (nav === 'read') mails = mails.filter((mail) => mail.isRead && !mail.isTrash)
            else if (nav === 'drafts') mails = mails.filter((mail) => mail.isDraft && !mail.isTrash)
            else if (nav === 'trash') mails = mails.filter((mail) => mail.isTrash)
            return mails
        },
        unmounted() {
            this.unsubscribe()
        },
    },
}
