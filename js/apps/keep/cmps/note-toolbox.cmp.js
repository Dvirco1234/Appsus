import { eventBus } from "../../../services/eventBus-service.js"

export default {
  template: `
  <section class="note-tools">
<button @click="pinNote">
<span class="material-symbols-outlined">
push_pin
</span>
</button>
<button @click="changeBgc">
<span class="material-symbols-outlined">
palette
</span> </button>
<button @click="$emit('update')">
<span class="material-symbols-outlined">
edit_note
</span>
</button>
<button @click="addClone">
<span class="material-symbols-outlined">
content_copy
</span>
</button>
<button @click="removeNote">
<span class="material-symbols-outlined">
delete
</span>
</button>
  </section>
  `,
  props: ["note"],
  data() {
    return {}
  },
  methods: {
    pinNote() {
      const newNote = this.clone()
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
    changeBgc() {
      console.log("change bgc")
    },
  },
  computed: {},
  created() {},
}
