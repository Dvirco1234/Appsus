import { noteService } from "../services/note-service.js"

export default {
  template: `
    <section v-if="currInput" class="notes-add">
        <form @submit.prevent="saveNote">
            <input class="add-input"  v-model="emptyNote.txt" :placeholder="currInput.placeholder" :type="currInput.type" />
        </form>
            <div class="add-btn-container">
                <button @click="setInput(0)" :class="textType"><span class="material-symbols-outlined">
note_add
</span></button>
                <button @click="setInput(1)" :class="imgType" ><span class="material-symbols-outlined">
photo_camera
</span> </button>
                <button @click="setInput(2)" :class="videoType"><span class="material-symbols-outlined">
videocam
</span></button>
                <button @click="setInput(3)" :class="listType" ><span class="material-symbols-outlined">
add_task
</span></button>
                <button @click="setInput(4)" :class="audioType" ><span class="material-symbols-outlined">
music_note
</span></button>
        </div>
    </section>
    `,
  data() {
    return {
      inputTypes: null,
      currInputIdx: 0,
      currInput: null,
      emptyNote: {
        txt: "",
        typeIdx: null,
      },
    }
  },
  methods: {
    getInputTypes() {
      noteService.getInputTypes().then((inputTypes) => {
        this.inputTypes = inputTypes
        console.log(inputTypes)
        this.setInput()
      })
    },
    setInput(inputIdx = 0) {
      this.currInputIdx = inputIdx
      this.currInput = this.inputTypes[this.currInputIdx]
      this.emptyNote.typeIdx = this.currInputIdx
    },
    saveNote() {
      this.$emit("addNote", this.emptyNote)
      this.emptyNote = null
      this.getEmptyNote()
    },
    getEmptyNote() {
      this.emptyNote = {
        txt: null,
        typeIdx: this.currInputIdx,
      }
    },
  },
  computed: {
    textType() {
      return this.currInputIdx === 0
    },
    imgType() {
      return this.currInputIdx === 1
    },
    videoType() {
      return this.currInputIdx === 2
    },
    listType() {
      return this.currInputIdx === 3
    },
    audioType() {
      return this.currInputIdx === 4
    },
  },
  created() {
    this.getInputTypes()
  },
}
