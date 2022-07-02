import longText from '../../../cmps/long-text.cmp.js'
export default {
    props: ['mail'],
    template: `
    <section v-if="mail" class="preview-container flex align-center" :class="isReadBgc" @click="openMail" @click.stop="saveChange">
        <td class="choose-mail flex align-center" title="Check mail" @click.stop="isMailChecked = !isMailChecked">
                <span v-if="!isMailChecked" class="material-symbols-outlined">
                    check_box_outline_blank
                </span>
                <span v-else class="material-symbols-outlined">
                    check_box
                </span>
        </td>
        <td class="star flex align-center" :title="checkIfStarred" @click.stop="mail.isStarred = !mail.isStarred" @click.stop="saveChange"> 
            <span class="material-symbols-outlined" :class="{checked: mail.isStarred}">
                grade
            </span>
        </td>
        <td v-if="!mail.isTrash" class="tag flex align-center" title="This mail is importante" @click.stop="mail.isLabeled = !mail.isLabeled" @click.stop="saveChange">
            <span class="material-symbols-outlined" :class="{checked: mail.isLabeled}">
                label_important
            </span>
        </td>
        <td v-else class="tag flex align-center" title="Restore from trash" @click.stop="mail.isTrash = !mail.isTrash">
            <span class="material-symbols-outlined">
                restore_from_trash
            </span>
        </td>
        <div class="mail-info flex" :to="'/mail/'+mail.id">
            <td class="subject"><span>{{mail.subject}}</span><span class="draft-span">{{isDraft}}</span></td>
            <!-- <td class="body"><long-text :txt="mail.body"/></td> -->
            <td class="body"><span>{{mail.body}}</span></td>
            <!-- <td class="body">{{mail.body}}</td> -->
            <td class="sent-at">{{showTime}}</td>
        </div>
        <div class="opt-btns flex space-between align-center">
            <button class="delete" @click.stop="deleted" title="Delete">
                <span class="material-symbols-outlined">delete</span>
            </button>
            <button class="mark-read" @click.stop="mail.isRead = true" @click.stop="saveChange" title="Mark us read">
                <span class="material-symbols-outlined">drafts</span>
            </button>
            <button class="mark-unread" @click.stop="mail.isRead = false" @click.stop="saveChange" title="Mark us unread">
                <span class="material-symbols-outlined">mark_email_unread</span>
            </button>
        </div>
    </section>
    <div v-if="isMailShow" class="show-mail-preview">
        <h2>{{mail.subject}}</h2>
        <p>&lt;{{mail.to}}&gt;</p>
        <pre>{{mail.body}}</pre>
        <button class="to-full-mail-link" @click="showFullMail">
            <span class="material-symbols-outlined">open_in_new</span>
        </button>
        <!-- <router-link class="to-full-mail-link" :to="'/mail/'+mail.id">
            <span class="material-symbols-outlined">open_in_new</span>
        </router-link> -->
    </div>
    `,
    components: {
        longText,
    },
    data() {
        return {
            isMailChecked: false,
            isHover: false,
            isMailShow: false,
        }
    },
    created() {},
    methods: {
        deleted() {
            // if(this.mail.isTrash) this.$emit('deleteFromTrash', this.mail.id)
            if(this.mail.isTrash) this.$emit('deleted', this.mail.id)
            else {
                this.mail.isTrash = true
                this.$emit('toTrash', this.mail)
            }
        },
        openMail() {
            this.isMailShow = !this.isMailShow
            this.mail.isRead = true 
        },
        saveChange() {
            this.$emit('save', this.mail)
        },
        showFullMail() {
            this.$emit('fullMail', this.mail)
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
    unmounted() {
    },
    // watch: {
    //     'this.mail.isRead':{
    //         handler() {
    //             this.$emit('save', this.mail)
    //             console.log('saved');
    //         },
    //         immediate: true
    //     }
       
    // }

}
