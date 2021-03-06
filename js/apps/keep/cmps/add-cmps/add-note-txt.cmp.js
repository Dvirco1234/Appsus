export default {
  template: `
    <section class="note-add" @keyup.enter="addNote">
    <input v-model="note.info.title" type="text" placeholder="Title">
    <input v-model="note.info.txt" type="text" placeholder="What's on your mine...">
    </section>
`,
  data() {
    return {
      note: {
        type: "note-txt",
        info: {
          title: "",
          txt: "",
        },
      },
    }
  },
  created() {
    console.log(this.note)
  },
  methods: {
    addNote() {
      this.$emit("noteAdd", this.note)
    },
  },
  computed: {},
  mounted() {},
}
