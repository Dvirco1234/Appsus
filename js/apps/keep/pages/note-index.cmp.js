import { noteService } from "../services/note-service.js"
import { eventBus } from "../../../services/eventBus-service.js"

import noteFilter from "../cmps/note-filter.cmp.js"
import noteList from "../cmps/note-list.cmp.js"
import addNote from "../cmps/add-note.cmp.js"

export default {
  template: `
  <section class="note-index main-layout">
      <add-note @newNote="addNote" />
      <note-filter @filter="setFilter" />
      <note-list v-if="notes" :notes="notesToDisplay"/> 
  </section>
`,
  data() {
    return {
      notes: null,
      filterBy: {
        txt: "",
        type: "",
      },
    }
  },
  created() {
    this.getNotesFromStorage()
    eventBus.on("noteAdd", this.addNote)
    eventBus.on("noteUpdate", this.updateNote)
    eventBus.on("noteRemoved", this.removeNote)

    this.unsubscribe = eventBus.on("mailToNote", this.mailToNote)

    this.filterBy.type = "all"
  },
  methods: {
    addNote(newNote) {
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
      console.log(mail)
    },
    updateNote(updatedNote) {
      noteService.save(updatedNote).then(() => {
        const idx = this.notes.findIndex((note) => note.id === updatedNote.id)
        this.notes.splice(idx, 1, updatedNote)
      })
    },
    setFilter({ type }) {
      this.filterBy.type = type
      console.log(type)
      // this.filterBy.txt = ""
      // if (txt) this.filterBy.txt = txt
      // if (type) this.filterBy.type = type === "all" ? "" : type
    },
  },
  computed: {
    notesToDisplay() {
      let notes = this.notes
      if (this.filterBy.type === "all") return (notes = this.notes)
      const { type } = this.filterBy
      if (type) return (notes = notes.filter((note) => note.type === type))
      // if (txt) {
      //   const regex = new RegExp(txt, "i")
      //   notes = notes.filter(
      //     (note) =>
      //       regex.test(note.info.title) ||
      //       regex.test(note.info.txt) ||
      //       note.info.todos?.some((todo) => regex.test(todo.txt))
      //   )
      // }
    },
  },
  components: {
    noteList,
    addNote,
    noteFilter,
  },
  unmounted() {
    this.unsubscribe()
  },
}
