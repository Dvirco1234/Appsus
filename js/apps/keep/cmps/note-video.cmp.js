export default {
  props: ["note"],
  template: `
      <section class="note-video">
        <iframe :src="note.info.url" frameborder="0"> </iframe>
      </section>
    `,
}
