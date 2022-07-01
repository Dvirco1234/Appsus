export default {
    props: ['mails'],
    template: `
        <section class="mail-nav">
            <ul>
                <li @click="setFilter('all')" :class="{ selected: selected === 'all' }">
                    <span class="material-symbols-outlined">mail</span> 
                    <span>All</span>
                    <span class="unread-count">{{unreadMails}}</span>
                </li>
                <li @click="setFilter('inbox')" :class="{ selected: selected === 'inbox' }">
                    <span class="material-symbols-outlined">inbox</span> 
                    Inbox
                </li>
                <li @click="setFilter('starred')" :class="{ selected: selected === 'starred' }">
                    <span class="material-symbols-outlined">star</span> 
                    Starred
                </li>
                <li @click="setFilter('sent')" :class="{ selected: selected === 'sent' }">
                    <span class="material-symbols-outlined">send</span> 
                    Sent
                </li>
                <li @click="setFilter('read')" :class="{ selected: selected === 'read' }">
                    <span class="material-symbols-outlined">drafts</span> 
                    Read
                </li>
                <li @click="setFilter('drafts')" :class="{ selected: selected === 'drafts' }">
                    <span class="material-symbols-outlined">draft</span> 
                    Drafts
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            selected: 'all',
        }
    },
    created() {},
    methods: {
        setFilter(by){
            this.$emit('filtered', by)
            this.selected = by
        }
    },
    computed: {
        unreadMails() {
            const unreadMails = this.mails.filter(mail => !mail.isRead)
            return unreadMails.length
        },
    },
    unmounted() {},
}
