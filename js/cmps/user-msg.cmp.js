import { eventBus } from "../services/eventBus-service.js";
export default {
    template: `
    <section v-if="msg" class="user-msg flex space-between align-center" :class="msg.type">
        <div class="message">
            <p class="msg-txt">{{msg.txt}}</p>
        </div> 
        <button @click="msg = null" class="flex align-center">
            <span class="material-symbols-outlined">close</span>
        </button>
    </section>
    `,
    data() {
        return {
            unsubscribe: null,
            msg: null
        };
    },
    created() {
        this.unsubscribe = eventBus.on('show-msg', this.showMsg)
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 10000)
        }
    },
    computed: {},
    unmounted() {
        this.unsubscribe()
    },
};