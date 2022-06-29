export default {
  props: ["note"],
  template: `
<section class="note-todos">
     <h2> {{note.info.label}}</h2>
       <ul>
            <li for="todo in note.todos" :key="note.id">
            <p>{{note.txt}} </p>
            </li>
       </ul>
 </section>
    `,
}
