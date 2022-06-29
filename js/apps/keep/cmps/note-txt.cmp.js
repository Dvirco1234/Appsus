export default {
  props: ["note"],
  template: `
    <section class="note-txt">
        <h2>Note title </h2>
        <p> {{note.info.txt}} </p>
    </section>
    `,
}
