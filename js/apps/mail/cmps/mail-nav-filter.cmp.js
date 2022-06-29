export default {
    template: `
        <section class="mail-nav">
            <ul>
                <li @click="setFilter(null)">All</li>
                <li @click="setFilter('inbox')">Inbox</li>
                <li @click="setFilter('starred')">Starred</li>
                <li @click="setFilter('sent')">Sent</li>
                <li @click="setFilter('drafts')">Drafts</li>
            </ul>
        </section>
    `,
    data() {
        return {
            // filterBy: null,
        }
    },
    created() {},
    methods: {
        // setFilter(by){
        //     // this.filterBy = by
        //     this.$emit('filtered', by, by)
        // }
    },
    computed: {},
    unmounted() {},
}
