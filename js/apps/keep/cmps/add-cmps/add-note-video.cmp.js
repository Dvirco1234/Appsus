export default {
  template: ` 
      <section class="note-add" @keyup.enter="addNote">
        <div>
        <input type="text"
                v-model="note.info.title"
               placeholder="add title">
          <input v-model="note.info.url" type="url" placeholder="add video url">
        </div>
      </section>
  `,
  data() {
    return {
      note: {
        type: "note-video",
        info: {
          url: "",
        },
      },
    }
  },
  created() {},
  methods: {
    addNote() {
      this.$emit("noteAdd")
    },
  },
  computed: {},
  unmounted() {},
}
