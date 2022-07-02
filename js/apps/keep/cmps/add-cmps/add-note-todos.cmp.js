import { eventBus } from "../../../../services/eventBus-service.js"

export default {
  template: `
<section class="note-add">
   <input v-model="note.info.label" type="text" placeholder="Add todo title..."  @keyup.enter="addTodos">
     <!-- <input v-model="note.info.todos.txt" type="text" placeholder="Add Todos" /> -->
    <!-- <button @click="addTodos">Add</button> -->

 </section>
    `,
  data() {
    return {
      note: {
        type: "note-todos",
        info: {
          todos: [],
          label: "",
        },
      },
    }
  },
  methods: {
    addTodos() {
      console.log(this.note)
      // this.note.info.todos = this.todos

      this.$emit("noteAdd", this.note)
    },
  },
  created() {},
}
