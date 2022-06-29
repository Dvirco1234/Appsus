export default {
  props: ["note"],
  template: `
      <section class="note-video">
        <iframe width="250" :src="note.info.url"> </iframe>
      </section>
    `,
}
