export default {
  props: ["note"],
  template: `
      <section class="note-video">
        <iframe width="350" height="250" :src="note.info.url" frameborder="0"> </iframe>
      </section>
    `,
}
