import noteTxt from "../cmps/note-txt.cmp.js"
import noteImg from "../cmps/note-img.cmp.js"
import noteTodos from "../cmps/note-todos.cmp.js"
import noteVideo from "../cmps/note-video.cmp.js"
import noteAudio from "../cmps/note-audio.cmp.js"
import noteToolbox from "../cmps/note-toolbox.cmp.js"

export default {
  props: ["note"],
  template: `
<section class="note-preview" :style="noteBgc">
    <div>
      <component 
      :is="note.type"
      :note="note">
      </component>
    </div>
    <note-toolbox :note="note"  />
</section>
  `,
  data() {
    return {}
  },
  created() {},
  computed: {
    noteBgc() {
      return { backgroundColor: this.note.style.backgroundColor }
    },
  },
  methods: {
    updateNote() {
      console.log("updating")
      this.isUpdate = true
    },
  },
  components: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo,
    noteAudio,
    noteToolbox,
  },
}
