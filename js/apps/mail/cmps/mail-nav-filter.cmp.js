export default {
    template: `
        <section class="mail-nav">
            <ul>
                <li @click="setFilter(all)" :class="{ selected: selected === 'all' }">
                    <span class="material-symbols-outlined">
                        mail
                    </span> 
                    All
                </li>
                <li @click="setFilter('inbox')" :class="{ selected: selected === 'inbox' }">
                    <span class="material-symbols-outlined">
                        inbox
                    </span> 
                    Inbox
                </li>
                <li @click="setFilter('starred')" :class="{ selected: selected === 'starred' }">
                    <span class="material-symbols-outlined">
                        star
                    </span> 
                    Starred
                </li>
                <li @click="setFilter('sent')" :class="{ selected: selected === 'sent' }">
                    <span class="material-symbols-outlined">
                        send
                    </span> Sent</li>
                <li @click="setFilter('drafts')" :class="{ selected: selected === 'drafts' }">
                    <span class="material-symbols-outlined">
                        draft
                    </span> 
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
    },
    unmounted() {},
}
