import { eventBus } from "../../../services/eventBus-service.js"

export default {
  props: ["note"],
  template: `
<section class="note-todos">
     <h2> {{note.info.label}}</h2>
       <ul>
            <li v-for="(todo, idx) in note.info.todos" :key="note.id">
              <span :class="{ done: todo.isDone }" @click="toggleIsDone(idx)">{{ todo.txt }}</span>
              <span @click="removeTodo(idx)" class="remove-todo">X</span>
            </li>
       </ul>
       <input v-model="todoTxt" type="text" placeholder="add todo" @keyup.enter="addTodo">
 </section>
    `,
  data() {
    return {
      todoTxt: "",
    }
  },
  methods: {
    addTodo() {
      const newNoteTodos = JSON.parse(JSON.stringify(this.note))
      const todo = {
        isDone: false,
        txt: this.todoTxt,
        doneAt: null,
      }
      newNoteTodos.info.todos.push(todo)
      eventBus.emit("noteUpdate", newNoteTodos)

      this.todoTxt = ""
    },
    toggleIsDone(idx) {
      const newNoteTodos = JSON.parse(JSON.stringify(this.note))
      newNoteTodos.info.todos[idx].isDone = !newNoteTodos.info.todos[idx].isDone
      eventBus.emit("noteUpdate", newNoteTodos)
    },
    removeTodo(idx) {
      const newNoteTodos = JSON.parse(JSON.stringify(this.note))
      newNoteTodos.info.todos.splice(idx, 1)
      eventBus.emit("noteUpdate", newNoteTodos)
    },
  },
}
