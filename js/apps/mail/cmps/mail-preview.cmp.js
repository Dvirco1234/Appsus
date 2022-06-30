export default {
    props: ['mail'],
    template: `
    <router-link class="mail-tr flex" :to="'/mail/'+mail.id">
        <td class="choose-mail"><input type="checkbox"></td>
        <td class="star">★</td>
        <td class="tag">tag</td>
        <td class="subject">{{mail.subject}}</td>
        <td class="body">{{mail.body}}</td>
        <td class="sent-at">{{showTime}}</td>
    </router-link>
    `,
    data() {
        return {}
    },
    created() {},
    methods: {},
    computed: {
        showTime(){
            const date = new Date(this.mail.sentAt)
            const dateStr = date.toString().split(' ')
            const timeStr = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            if(new Date().getDate() === date.getDate()) return timeStr
            else return dateStr[1] + ' ' + dateStr[2]
        }
    },
    unmounted() {},
}
