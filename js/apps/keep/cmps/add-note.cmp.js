import { noteService } from "../services/note-service.js"
import addNoteTxt from "./add-cmps/add-note-txt.cmp.js"
import addNoteImg from "./add-cmps/add-note-img.cmp.js"
import addNoteVideo from "./add-cmps/add-note-video.cmp.js"
import addNoteTodos from "./add-cmps/add-note-todos.cmp.js"

export default {
  template: `
    <section class="notes-add">
    <h4 v-if="!type">Pick a note </h4>
      <add-note-txt v-if="type === 'note-txt'" @noteAdd="noteAdd" />
      <add-note-img v-if="type === 'file'" @noteAdd="noteAdd" />
      <add-note-video v-if="type === 'note-video'" @noteAdd="noteAdd" />
      <add-note-video v-if="type === 'note-todos'" @noteAdd="noteAdd" />

          <div class="add-btn-container">
                <button @click="setInputType('note-txt')">
                   <span class="material-symbols-outlined"> note_add </span>
                </button>
                <button @click="setInputType('file')">
                  <span class="material-symbols-outlined">photo_camera</span>
                </button>
                <button @click="setInputType('note-video')">
                  <span class="material-symbols-outlined">videocam</span>
                </button>
                <button @click="setInputType('note-todos')" >
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
      console.log(note)
      this.type = null
    },
    setInputType(type) {
      this.type = type
    },
  },
  computed: {},
  created() {},
  components: {
    addNoteTxt,
    addNoteImg,
    addNoteVideo,
    addNoteTodos,
  },
}
