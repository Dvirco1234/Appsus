import { noteService } from "../services/note-service.js"
import addNoteTxt from "./add-cmps/add-note-txt.cmp.js"
import addNoteImg from "./add-cmps/add-note-img.cmp.js"
import addNoteVideo from "./add-cmps/add-note-video.cmp.js"
import addNoteTodos from "./add-cmps/add-note-todos.cmp.js"

export default {
  template: `
    <section class="notes-add">
      <add-note-txt v-if="type === 'note-txt'" @noteAdd="noteAdd" />
      <add-note-img v-if="type === 'note-img'" @noteAdd="type = null" />
      <add-note-video v-if="type === 'note-video'" @noteAdd="type = null" />
       <!-- <form @submit.prevent="saveNote">
          <input class="add-input"
          v-model="inputText" 
          :placeholder="currInput.placeholder" 
           />
      </form> -->
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
      // inputTypes: null,
      // currInput: null,
      // inputText: "",
      // emptyNote: {
      //   info: {},
      //   type: null,
      // },
    }
  },
  methods: {
    noteAdd(note) {
      console.log(note)
      noteService.addNote(note)
      this.$emit("newNote", note)
    },
    // getInputTypes() {
    //   noteService.getInputTypes().then((inputTypes) => {
    //     this.inputTypes = inputTypes
    //     console.log(this.inputTypes)
    //     this.setInput()
    //   })
    // },
    // setInput1(inputIdx = 0) {
    //   this.currInputIdx = inputIdx
    //   this.currInput = this.inputTypes[this.currInputIdx]
    //   this.emptyNote.typeIdx = this.currInputIdx
    // },
    // saveNote1() {
    //   const note = this.emptyNote
    //   if (note.type === "note-txt") {
    //     note.info = { txt: this.inputText }
    //   }
    //   if (note.type === "note-img") {
    //     note.info = { url: this.inputText, title: "" }
    //   }
    //   this.$emit("addNote", this.emptyNote)
    // },
    setInputType(type) {
      this.type = type
      console.log(this.type)
    },
  },
  computed: {},
  created() {
    // noteService.getInputTypes().then((inputTypes) => {
    //   this.inputTypes = inputTypes
    //   console.log(this.inputTypes)
    //   this.setInput()
    // })
  },
  components: {
    addNoteTxt,
    addNoteImg,
    addNoteVideo,
    addNoteTodos,
  },
}
