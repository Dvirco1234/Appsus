import { noteService } from "../services/note-service.js"

export default {
  template: `
  <section class="main-layout">
   <h1> note index </h1>

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
  components: {},
}
