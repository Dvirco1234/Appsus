export default {
  props: ["note"],
  template: `
    <section class="note-audio">
      <audio controls class="audio">
        <source :src="note.info.url" />
      </audio>
    </section>
`,
}
