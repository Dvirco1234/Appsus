import { noteService } from "../services/note-service.js"
import noteList from "../cmps/note-list.cmp.js"
import addNote from "../cmps/add-note.cmp.js"
import { eventBus } from "../../../services/eventBus-service.js"

export default {
  template: `
  <section class="note-index main-layout">
  <add-note @newNote="addNote" />
  <note-list v-if="notes" :notes="notes"/> 
    </section>
`,
  data() {
    return {
      notes: [],
    }
  },
  created() {
    this.getNotesFromStorage()
    eventBus.on("noteAdd", this.addNote)
    eventBus.on("noteRemoved", this.removeNote)
    this.unsubscribe = eventBus.on('mailToNote', this.mailToNote)
  },
  methods: {
    addNote(newNote) {
      // this.notes.unshift(newNote)
      noteService
        .addNote(newNote)
        .then((newNote) => this.notes.unshift(newNote))
    },
    getNotesFromStorage() {
      noteService.query().then((notes) => (this.notes = notes))
    },
    removeNote(noteId) {
      noteService.removeNote(noteId).then(() => {
        const idx = this.notes.findIndex((note) => note.id === noteId)
        this.notes.splice(idx, 1)
      })
    },
    mailToNote(mail) {
      console.log(mail);
    },
  },
  computed: {},
  components: {
    noteList,
    addNote,
  },
  unmounted() {
    this.unsubscribe()
  },
}
