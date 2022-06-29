export default {
    props: ['mails'],
    template: `
        <section class="mail-search">
            <input type="text" v-model="filterByTxt" 
            @input="filter" placeholder="Search">
        </section>
    `,
    data() {
        return {
            filterByTxt: '', 

        }
    },
    methods: {
        filter() {
            // console.log(this.mails);
            this.$emit('filtered', this.filterByTxt, 'txt')
        },
    },
    computed: {
    },
    created() {
        
    },
}
