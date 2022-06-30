export default {
    props: ['mail'],
    template: `
    <section v-if="mail" class="preview-container flex">
        <td class="choose-mail" @click="isMailChecked = !isMailChecked">
                <span v-if="!isMailChecked" class="material-symbols-outlined">
                    check_box_outline_blank
                </span>
                <span v-else class="material-symbols-outlined">
                    check_box
                </span>
        </td>
        <td class="star" @click1="starMail(mail.id)" @click="mail.isStarred = !mail.isStarred">
            <span class="material-symbols-outlined" :class="{checked: mail.isStarred}">
                grade
            </span>
            <!-- <span v-if="!mail.isStarred" class="material-symbols-outlined">
                grade
            </span>
            <span v-else class="material-symbols-outlined">
                star
            </span> -->
        </td>
        <td class="tag" @click="mail.isLabeled = !mail.isLabeled">
            <span class="material-symbols-outlined" :class="{checked: mail.isLabeled}">
                label_important
            </span>
        </td>
        <router-link class="mail-tr flex" :to="'/mail/'+mail.id">
            <td class="subject">{{mail.subject}} <span>{{isDraft}}</span></td>
            <td class="body">{{mail.body}}</td>
            <td class="sent-at">{{showTime}}</td>
        </router-link>
    </section>
    `,
    data() {
        return {
            isMailChecked: false,
            // isMailStarred: false,
            // isMailLabeled: false,
            // mail: null,
        }
    },
    created() {

    },
    methods: {
        starMail(id) {
            isMailStarred = !isMailStarred
        }
    },
    computed: {
        showTime(){
            const date = new Date(this.mail.sentAt)
            const dateStr = date.toString().split(' ')
            const timeStr = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            if(new Date().getDate() === date.getDate()) return timeStr
            else return dateStr[1] + ' ' + dateStr[2]
        },
        isDraft() {
            return this.mail.isDraft? '(Draft)' : ''
        }
    },
    unmounted() {},
}
