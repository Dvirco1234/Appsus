export default {
    props: ['txt'],
    template: `
        <p class="long-text">{{longText}}<span v-if="isLongTxt">...</span></p>
    `,
    data() {
        return {
            isLongTxt: false,
            isTxtHide: true,
        }
    },
    methods: {
        toggleLongTxt(){
            this.isTxtHide = !this.isTxtHide 
        }
    },
    computed: {
        longText(){
            if(this.txt.length > 100 && this.isTxtHide){
                this.isLongTxt = true
                return this.txt.substring(0, 100)
            } 
            else return this.txt
        },
        moreLess(){
            return this.isTxtHide ? '...More': '...Less'
        },
    },
}
