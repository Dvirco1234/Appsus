import { noteService } from "../services/note-service.js"
import noteList from "../cmps/note-list.cmp.js"

export default {
  template: `
  <section class="note-index main-layout">
   <h1> note index </h1>

  <note-list v-if="notes" :notes="notes"/> 
    </section>
`,
  data() {
    return {
      notes: null,
    }
  },
  created() {
    noteService.query().then((notes) => {
      this.notes = notes
      console.log(this.notes)
    })
  },
  methods: {},
  computed: {},
  components: {
    noteList,
  },
}
