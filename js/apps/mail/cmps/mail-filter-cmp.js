export default {
    template: `
 <section class="book-filter">

 </section>
`,
    // props: ['books'],
    data() {
        return {
            filterBy: {
                title: '',
                price: null,
            },
        }
    },
    methods: {
        // filter() {
        //     this.$emit('filtered', this.filterBy)
        // },
    },
    computed: {
    },
    created() {
        // this.filterBy.price = this.minPrice
    },
}
