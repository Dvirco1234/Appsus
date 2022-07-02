export default {
  template: `
 <section class="add-note-audio">
     <div class="img-inputs">
     <input type="url" v-model="note.info.url" placeholder="Add audio url" @keyup.enter="addNote">
     </div>
 </section>
`,
  data() {
    return {
      note: {
        type: "note-audio",
        info: {
          utl: "",
        },
      },
    }
  },
  created() {},
  methods: {
    addNote() {
      this.$emit("noteAdd", this.note)
    },
    audioInput(ev) {
      this.loadAudioFromInput(ev, this.onAudioReady)
    },
    loadAudioFromInput(ev, onAudioReady) {
      const reader = new FileReader()
      reader.onload = function (event) {
        const audio = new Audio(event.target.result)
        onAudioReady(audio)
      }
      reader.readAsDataURL(ev.target.files[0])
    },
    onAudioReady(audio) {
      this.note.info.url = audio.src
      this.addNote()
    },
  },
  computed: {},
  unmounted() {},
}
