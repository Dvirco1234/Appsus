import { eventBus } from "../../../services/eventBus-service.js"

export default {
  template: `
        <section class="note-tools">
          <button @click="pinNote">
              <span class="material-symbols-outlined">push_pin</span>
          </button>
          <button @click="changeBgc">
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
          </button>
          <button @click="sendToMail"> <router-link to="/mail/"> Send </router-link></button>
        </section>
  `,
  props: ["note"],
  data() {
    return {}
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
      const cloneNote = this.clone()
      cloneNote.style.backgroundColor = color
      console.log("change bgc")
    },
    sendToMail(){
        eventBus.emit("sendNote", this.note.info)
    }
  },
  computed: {},
  created() {},
}
