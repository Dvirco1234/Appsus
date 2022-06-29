export default {
    template: `
        <section class="compose-mail">
            <header class="flex space-between">
                <h4>New Message</h4>
            </header>
            <form @submit.prevent="send" class="flex">
                <input ref="input" type="text" id="recipients" v-model="newMail.to" placeholder="Recipients">
                <input type="text" id="name" v-model="newMail.subject" placeholder="Subject">
                <textarea id="free-txt" cols="30" rows="10" 
                v-model="newMail.txt"></textarea>
                
                <footer class="flex space-between"><button>Send</button></footer>
            </form>
        </section>
    `,
    data() {
        return {
            newMail: {
                to: '',
                subject: '',
                txt: '',
            }
        }
    },
    created() {},
    methods: {
        // send() {
        //     bookService.addReview(this.book, {...this.review})
        //     this.isReview = !this.isReview
        //     this.review = bookService.getEmptyReview()
        //     const txt = 'review was successfully added'
        //     eventBus.emit('show-msg', {
        //         txt,
        //         type: 'success',
        //         name: this.book.title,
        //         bookId: this.book.id,
        //     })
        // },
    },
    computed: {},
    unmounted() {},
}
