export default {
  props: ["note"],
  template: `
      <section class="note-video">
        <iframe :src="newUrl" frameborder="0" allow="accelerometer; autoplay; 
         encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
      </section>
    `,
  computed: {
    newUrl() {
      return "https://www.youtube.com/embed/" + this.note.info.videoId
    },
  },
}
