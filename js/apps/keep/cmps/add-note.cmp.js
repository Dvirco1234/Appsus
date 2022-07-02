import addNoteTxt from "./add-cmps/add-note-txt.cmp.js"
import addNoteImg from "./add-cmps/add-note-img.cmp.js"
import addNoteVideo from "./add-cmps/add-note-video.cmp.js"
import addNoteTodos from "./add-cmps/add-note-todos.cmp.js"
import addNoteAudio from "./add-cmps/add-note-audio.cmp.js"

export default {
  template: `
    <section class="notes-add">
    <h4 v-if="!type">Choose note type... </h4>
      <add-note-txt v-if="type === 'note-txt'" @noteAdd="noteAdd" />
      <add-note-img v-if="type === 'note-img'" @noteAdd="noteAdd" />
      <add-note-video v-if="type === 'note-video'" @noteAdd="noteAdd" />
      <add-note-todos v-if="type === 'note-todos'" @noteAdd="noteAdd" />
      <add-note-audio v-if="type === 'note-audio'" @noteAdd="noteAdd" />

          <div class="add-btn-container">
                <button @click="setInputType('note-txt')">
                   <span class="material-symbols-outlined"> note_add </span>
                </button>
                <button @click="setInputType('note-img')">
                  <span class="material-symbols-outlined">photo_camera</span>
                </button>
                <button @click="setInputType('note-video')">
                  <span class="material-symbols-outlined">videocam</span>
                </button>
                <button @click="setInputType('note-todos')"  >
                  <span class="material-symbols-outlined"> add_task </span>
                </button>
                <button @click="setInputType('note-audio')" >
                  <span class="material-symbols-outlined"> music_note </span>
                </button>
           </div>
    </section>
    `,
  data() {
    return {
      type: null,
    }
  },
  methods: {
    noteAdd(note) {
      this.$emit("newNote", note)
      this.type = null
    },
    setInputType(type) {
      this.type = type
      console.log(type)
    },
    mouseOver() {
      this.isActive = !this.isActive
    },
  },
  computed: {},
  created() {},
  components: {
    addNoteTxt,
    addNoteImg,
    addNoteVideo,
    addNoteTodos,
    addNoteAudio,
  },
}
