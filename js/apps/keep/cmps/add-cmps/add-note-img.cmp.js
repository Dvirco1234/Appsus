export default {
  template: `
    <section class="note-add">
        <div class="add-note-img">
         <input type="text"
         v-model="note.info.title"
         placeholder="add img title">
             
                 <input type="url"
                 v-model="note.info.url"
                 placeholder="add url"
                 @keyup.enter="addNote">
           
            </div>
          </section>
      `,
  data() {
    return {
      note: {
        type: "note-img",
        info: {
          url: "",
          title: "",
        },
      },
    }
  },
  methods: {
    addNote() {
      this.$emit("noteAdd")
    },
    imgInput(ev) {
      this.loadImageFromInput(ev, this.onImageReady)
    },
    loadImageFromInput(ev, onImageReady) {
      var reader = new FileReader()
      reader.onload = function (event) {
        var img = new Image()
        img.src = event.target.result
        img.onload = onImageReady.bind(null, img)
      }
      reader.readAsDataURL(ev.target.files[0])
    },
    onImageReady(img) {
      this.note.info.url = img.src
      addNote()
    },
  },
  computed: {},
  unmounted() {},
}
