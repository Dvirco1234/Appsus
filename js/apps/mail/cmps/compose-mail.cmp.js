export default {
    props: ['draft'],
    template: `
        <section class="compose-mail">
            <header class="flex space-between align-center">
                <h4>New Message</h4>
                <button @click="close" title="Close">x</button>
            </header>
            <form @submit.prevent="send" class="flex">
                <input ref="input" type="text" id="recipients" v-model="newMail.to" placeholder="Recipients">
                <input type="text" id="name" v-model="newMail.subject" placeholder="Subject">
                <div class="text-area"><textarea id="free-txt" cols="50" rows="20" 
                v-model="newMail.body"></textarea>
                </div>
                <footer class="flex space-between align-center">
                    <button class="send-btn">Send</button>
                    <button class="delete-btn" @click="deleteDraft" title="Delete draft">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
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
                isDraft: false,
                isStarred: false,
                isSent: false,
                isLabeled: false,
            },
            saveDraftId: null,
        }
    },
    created() {},
    methods: {
        send() {
            const mail = this.newMail
            mail.sentAt = Date.now()
            this.$emit('sent', mail)
        },
        saveDraft() {
            this.newMail.isDraft = true
            this.newMail.sentAt = Date.now()
            const draft = this.draft? this.draft : this.newMail
            this.$emit('saveDraft', draft)
        },
        deleteDraft() {
            if(this.draft) this.$emit('deleteDraft', this.draft.id)
            this.close()
        },
        close() {
            this.$emit('closed')
        },
    },
    computed: {},
    mounted() {
        // console.log('mounted');
        this.saveDraftId = setInterval(() => {
           this.saveDraft() 
           console.log('saving draft');
        }, 5000)
    },
    unmounted() {
        clearInterval(this.saveDraftId)
        // console.log('unmounted');
    },
}
