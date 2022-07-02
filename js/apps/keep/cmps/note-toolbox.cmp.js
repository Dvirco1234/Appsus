import { eventBus } from "../../../services/eventBus-service.js"
import noteColorBgc from "./note-color-bgc.cmp.js"

export default {
  template: `
        <section class="note-tools" @click.stop>
          <button @click="pinNote">
              <span class="material-symbols-outlined">push_pin</span>
          </button>
          <button @click="isChangeBgc=!isChangeBgc" class="note-toolbox-color">
              <span class="material-symbols-outlined">palette</span>
            </button>
          <button @click="$emit('update')">
              <span class="material-symbols-outlined">edit_note</span>    
          </button>
          <button @click="addClone">
              <span class="material-symbols-outlined">content_copy</span>
          </button>
          <button @click="removeNote">
              <span class="material-symbols-outlined">delete</span>  
          </button>
          <button @click="sendToMail"> 
              <router-link to="/mail/"> 
                  <span class="send-mail-btn material-symbols-outlined">send</span>
              </router-link>
          </button>
          <note-color-bgc v-if="isChangeBgc" @picked="changeBgc" />
        </section>
  `,
  props: ["note"],
  data() {
    return {
      isChangeBgc: false,
    }
  },
  methods: {
    sendToMail() {
      console.log("send")
      eventBus.emit("sendNote", this.note)
    },
    pinNote() {
      const newNote = this.clone()
      console.log(newNote)
      newNote.isPinned = !newNote.isPinned
      eventBus.emit("selected", newNote)
    },
    clone() {
      return JSON.parse(JSON.stringify(this.note))
    },
    addClone() {
      const newNote = this.clone()
      eventBus.emit("noteAdd", newNote)
    },
    removeNote() {
      eventBus.emit("noteRemoved", this.note.id)
    },
    changeBgc(color) {
      console.log(color)
      this.note.style.backgroundColor = color
      eventBus.emit("noteUpdate", this.note)
    },
    sendToMail() {
      eventBus.emit("sendNote", this.note.info)
    },
  },
  components: {
    noteColorBgc,
  },
  created() {},
}
