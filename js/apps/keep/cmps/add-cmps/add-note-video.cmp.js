import { eventBus } from "../../../../services/eventBus-service.js"

export default {
  template: ` 
      <section class="note-add" @keyup.enter="addNote">
        <div>
        <input type="text"
                v-model="note.info.title"
                placeholder="add title">
          <input v-model="note.info.url" type="url" placeholder="add video url">
        </div>
      </section>
  `,
  data() {
    return {
      note: {
        type: "note-video",
        info: {
          title: "",
          url: "",
        },
      },
    }
  },
  created() {},
  methods: {
    addNote() {
      const videoId = this.matchYoutubeUrl(this.note.info.url)
      const videoUrl = `https://www.youtube.com/embed/${videoId}`
      console.log(videoUrl)
      this.note.info.url = videoUrl
      eventBus.emit("noteAdd", this.note)
      this.$emit("noteAdd")
    },
    matchYoutubeUrl(url) {
      var regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/

      return url.match(regExp) && url.match(regExp)[7].length == 11
        ? url.match(regExp)[7]
        : null
    },
  },
  computed: {},
  unmounted() {},
}
