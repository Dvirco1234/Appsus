export default {
    template: `
        <section class="compose-mail">
            <header class="flex space-between">
                <h4>New Message</h4>
            </header>
            <form @submit.prevent="send" class="flex">
                <input ref="input" type="text" id="recipients" v-model="newMail.to" placeholder="Recipients">
                <input type="text" id="name" v-model="newMail.subject" placeholder="Subject">
                <div class="text-area"><textarea id="free-txt" cols="50" rows="20" 
                v-model="newMail.body"></textarea>
                </div>
                <footer class="flex space-between">
                    <button>Send</button>
                </footer>
            </form>
        </section>
    `,
    data() {
        return {
            newMail: {
                to: '',
                subject: '',
                body: '',
                sentAt: null,
            }
        }
    },
    created() {},
    methods: {
        send() {
            this.sentAt = Date.now()
            this.$emit('sent', this.newMail)
        },
    },
    computed: {},
    unmounted() {},
}
