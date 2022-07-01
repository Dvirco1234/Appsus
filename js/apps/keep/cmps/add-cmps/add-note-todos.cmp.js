import { eventBus } from "../../../../services/eventBus-service.js"
import { utilService } from "../../../../services/util-service.js"

export default {
  template: `
        <section class="note-add">
        <div>
            <input v-model="note.info.label" type="text" placeholder="todo">
            <div v-for="(todo, idx) in todos" :key="todo.id"> 
                  <input v-if="todo.txt" type="checkbox" v-model="todo.isDone" >
                  <span v-else>+</span>
                  <input 
                  type="text" 
                  v-model="todo.txt"  
                  @input.once="addListItem"
                  placeholder="add todo...">
            </div>
                <span v-if="todo.txt" @click="removeTodo(idx)" >x</span>
            <button @click="addTodos">Add</button>
        </div>
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
      id: utilService.makeId(),
      todos: [
        {
          id: this.id,
          txt: "",
          isDone: false,
          doneAt: null,
        },
      ],
    }
  },
  methods: {
    addTodos() {
      this.todos.pop()
      this.note.info.todos = this.todos

      eventBus.emit("noteAdd", this.note)
      this.$emit("noteAdd")
    },
    addListItem() {
      this.todos.push({
        id: utilService.makeId(),
        txt: "",
        isDone: false,
        doneAt: null,
      })
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1)
      console.log(this.todos)
    },
  },
}
