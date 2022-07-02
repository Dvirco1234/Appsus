import { eventBus } from "../../../../services/eventBus-service.js"

export default {
  template: `
<section class="note-add">
   <input v-model="note.info.label" type="text" placeholder="Add todo title...">
     
    <button @click="addTodos">Add</button>

 </section>
    `,
  data() {
    return {
      note: {
        type: "note-todos",
        info: {
          todos: null,
          label: "",
        },
      },
    }
  },
  methods: {
    addTodos() {
      const newNote = this.getNoteTodo(note)
      console.log(newNote)
      // this.note.info.todos = this.todos

      this.$emit("noteAdd", this.note)
    },
    getNoteTodo(note) {
      eventBus.on("noteTodo", note)
      console.log(note)
    },
  },
  created() {},
}
