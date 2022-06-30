import noteTxt from "../cmps/note-txt.cmp.js"
import noteImg from "../cmps/note-img.cmp.js"
import noteTodos from "../cmps/note-todos.cmp.js"
import noteVideo from "../cmps/note-video.cmp.js"
import noteSound from "../cmps/note-audio.cmp.js"
import noteToolbox from "../cmps/note-toolbox.cmp.js"

export default {
  props: ["note"],
  template: `

<div class="note-preview" :style="noteBgc">
    <component 
    :is="note.type"
    :note="note">
    </component>
    <note-toolbox :note="note" @update="updateNote" />
</div>
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
    },
  },
  components: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo,
    noteSound,
    noteToolbox,
  },
}
