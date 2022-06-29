export default {
    props: ['mail'],
    template: `
        <td class="choose-mail"><input type="checkbox"></td>
        <td class="star">★</td>
        <td class="tag">tag</td>
        <td class="subject">{{mail.subject}}</td>
        <td class="body">{{mail.body}}</td>
        <td class="sent-at">{{mail.sentAt}}</td>
    `,
    data() {
        return {}
    },
    created() {},
    methods: {},
    computed: {},
    unmounted() {},
}
