export default {
    props: ['mail'],
    template: `
    <section v-if="mail" class="preview-container flex" :class="isReadBgc" @click="openMail">
        <td class="choose-mail" title="Check mail" @click.stop="isMailChecked = !isMailChecked">
                <span v-if="!isMailChecked" class="material-symbols-outlined">
                    check_box_outline_blank
                </span>
                <span v-else class="material-symbols-outlined">
                    check_box
                </span>
        </td>
        <td class="star" :title="checkIfStarred" @click.stop="mail.isStarred = !mail.isStarred">
            <span class="material-symbols-outlined" :class="{checked: mail.isStarred}">
                grade
            </span>
        </td>
        <td class="tag" title="This mail is importante" @click.stop="mail.isLabeled = !mail.isLabeled">
            <span class="material-symbols-outlined" :class="{checked: mail.isLabeled}">
                label_important
            </span>
        </td>
        <div class="mail-info flex" :to="'/mail/'+mail.id">
            <td class="subject">{{mail.subject}} <span>{{isDraft}}</span></td>
            <td class="body">{{mail.body}}</td>
            <td class="sent-at">{{showTime}}</td>
        </div>
        <div class="opt-btns flex space-between align-center">
            <button class="delete" @click.stop="deleted" title="Delete">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
            <button class="mark-read" @click.stop="mail.isRead = true" title="Mark us read">
                <span class="material-symbols-outlined">
                    drafts
                </span>
            </button>
            <button class="mark-unread" @click.stop="mail.isRead = false" title="Mark us unread">
                <span class="material-symbols-outlined">
                    mark_email_unread
                </span>
            </button>
        </div>
    </section>
    <div v-if="isMailShow" class="show-mail-preview">
        <h2>{{mail.subject}}</h2>
        <p>&lt;{{mail.to}}&gt;</p>
        <h4>{{mail.body}}</h4>
        <router-link class="to-full-mail-link" :to="'/mail/'+mail.id">
            <span class="material-symbols-outlined">
                open_in_new
            </span>
        </router-link>
    </div>
    `,
    data() {
        return {
            isMailChecked: false,
            // isMailStarred: false,
            // isMailLabeled: false,
            // mail: null,
            isHover: false,
            isMailShow: false,
        }
    },
    created() {},
    methods: {
        // starMail(id) {
        //     isMailStarred = !isMailStarred
        // },
        deleted() {
            this.$emit('deleted', this.mail.id)
        },
        openMail() {
            this.isMailShow = !this.isMailShow
            this.mail.isRead = true
            console.log('click');
        },
    },
    computed: {
        showTime() {
            const date = new Date(this.mail.sentAt)
            const dateStr = date.toString().split(' ')
            const timeStr = date.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })
            if (new Date().getDate() === date.getDate()) return timeStr
            else return dateStr[1] + ' ' + dateStr[2]
        },
        isDraft() {
            return this.mail.isDraft ? '(Draft)' : ''
        },
        isReadBgc() {
            return { read: this.mail.isRead }
        },
        checkIfStarred() {
            return this.mail.isStarred ? 'Starred' : 'Not starred'
        },
    },
    unmounted() {},
}
