import { noteService } from "../services/note-service.js"
import noteList from "../cmps/note-list.cmp.js"
import addNote from "../cmps/add-note.cmp.js"

export default {
  template: `
  <section class="note-index main-layout">
  <add-note @addNote="addNote" />
  <note-list v-if="notes" :notes="notes"/> 
    </section>
`,
  data() {
    return {
      notes: null,
    }
  },
  created() {
    this.getNotesFromStorage()
  },
  methods: {
    addNote(newNote) {
      noteService.addNote(newNote).then((ans) => {
        console.log(ans, this.notes)
      })
    },
    getNotesFromStorage() {
      noteService.query().then((notes) => {
        this.notes = notes
        console.log(this.notes)
      })
    },
  },
  computed: {},
  components: {
    noteList,
    addNote,
  },
}
