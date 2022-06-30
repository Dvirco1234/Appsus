export default {
  template: `
        <section class="note-add">
        <div">
            <input v-model="note.info.title" type="text" placeholder="todo title">
            <div v-for="todo in todos" :key="todo.id"> 
                  <input v-if="todo.txt" type="checkbox" v-model="todo.isDone" >
                  <span v-else>+</span>
                  <input 
                  type="text" 
                  v-model="todo.txt"  
                  @input="addListItem"
                  placeholder="List item">
            </div>
                <span v-if="todo.txt" @click="removeTodo(idx)">x</span>
            <button @click="addNote">Add</button>
        </div>
        </section>
  
    `,
  data() {
    return {
      note: {
        type: "note-todos",
        info: {
          todos: null,
          title: "",
        },
      },
      id: 101,
      todos: [{ id: this.id, txt: "", isDone: false, doneAt: null }],
    }
  },
  created() {},
  methods: {
    addNote() {
      this.todos.pop()
      this.note.info.todos = this.todos
      this.$emit("noteAdd")
    },
    addListItem() {
      this.todos.push({ id: this.id++, txt: "", isDone: false, doneAt: null })
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1)
      console.log(this.todos)
    },
  },
  computed: {},
  unmounted() {},
}
