import { bookService } from "../services/book-service.js"
import { showSuccessMsg, eventBus } from '../../../services/eventBus-service.js'

export default {
    template: `
    <h2 class="toggle-review" @click="isReview = !isReview"> Add review</h2>
    <section v-if="isReview" class="add-review flex ">
        <form @submit.prevent="add" class="review-form flex">
            <label for="name">Name</label>
            <input ref="input" type="text" id="name" v-model="review.name" placeholder="Full name">
            <label for="rate"> Book rate </label>
            <div class="rate">
                <span v-for="num in 5" :class="{star: num <= review.rate}" @click="setRating(num)">★</span>
            </div>
            <label for="time">Read book at </label>
            <input class="review-time" type="date" id="time" v-model="review.readAt">
            <textarea name="" id="free-txt" cols="30" rows="10" 
            placeholder="Your opinion" v-model="review.txt"></textarea>
            <button class="save-review">Save review</button>
        </form>
    </section>
`,
    props: ['book'],
    data() {
        return {
            review: {
                name: '',
                rate: 1,
                readAt: null,
                txt: '',
            },
            isReview: false,
        }
    },
    created() {

    },
    mounted() {
        // this.$refs.input.focus()
    },
    methods: {
        setRating(val) {
            this.review.rate = val
        },
        add() {
            bookService.addReview(this.book, {...this.review})
            this.isReview = !this.isReview
            this.review = bookService.getEmptyReview()
            showSuccessMsg('Review was successfully added')
        },
    },
    computed: {},
    unmounted() {},
}
