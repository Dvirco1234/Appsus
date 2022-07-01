export default {
  props: ["note"],
  template: `
    <section class="note-img">
        <h2> {{note.info.title}} </h2>
      <div v-if="note.info.url"> 
        <img :src="note.info.url" />
      </div>
    </section>
  `,
  computed: {},
}
