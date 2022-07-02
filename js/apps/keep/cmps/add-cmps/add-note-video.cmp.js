export default {
  template: ` 
      <section class="note-add" @keyup.enter="addNote">
        <div>
        <input type="text"
                v-model="note.info.title"
                placeholder="Add video title...">
          <input v-model="url" type="url" placeholder="Add video url...">
        </div>
      </section>
  `,
  data() {
    return {
      note: {
        type: "note-video",
        info: {
          title: "",
          videoId: "",
        },
        url: "",
      },
    }
  },
  created() {},
  methods: {
    addNote() {
      const videoId = this.matchYoutubeUrl(this.url)
      console.log(videoId)
      // const videoUrl = `https://www.youtube.com/embed/${videoId}`
      if (!videoId) return
      this.note.info.videoId = videoId
      this.$emit("noteAdd", this.note)
    },
    matchYoutubeUrl(url) {
      const regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      const match = url.match(regExp)
      return match && match[7].length == 11 ? match[7] : null
    },
  },
  computed: {},
  unmounted() {},
}
