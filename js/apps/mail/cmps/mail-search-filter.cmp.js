export default {
    props: ['mails'],
    template: `
        <section class="mail-search flex align-center">
            <span class="material-symbols-outlined">
                search
            </span>
            <input type="text" v-model="filterByTxt" 
            @input="filter" placeholder="Search mail">
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
            this.$emit('filtered', this.filterByTxt)
            // this.$emit('filtered', this.filterByTxt, 'txt')
        },
    },
    computed: {
    },
    created() {
        
    },
}
