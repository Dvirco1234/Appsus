export default {
  template: `
  <section class="add-note-img">
    <input type="text" v-model="note.info.title"  placeholder="choose image title">
             <input type="url" v-model="note.info.url" placeholder="Add image url" @keyup.enter="addImage">
 
   </section>
      `,
  data() {
    return {
      note: {
        type: "note-img",
        info: {
          url: null,
          title: "",
        },
      },
    }
  },
  methods: {
    addImage() {
      this.$emit("noteAdd", this.note)
    },
  },
}
