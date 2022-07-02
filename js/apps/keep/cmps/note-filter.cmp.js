export default {
  template: `
<section class="note-filter">
<button @click="filter('all')">All </button> |
  <button @click="filter('note-txt')">Text notes </button> |
  <button @click="filter('note-img')">Image notes </button> |
  <button @click="filter('note-video')">Video notes </button> |
  <button @click="filter('note-todos')">Todos notes </button> |
  <button @click="filter('note-audio')">Audio notes </button>
</section>
  `,
  data() {
    return {
      filterBy: {
        type: "",
      },
    }
  },
  methods: {
    filter(noteType) {
      this.filterBy.type = noteType
      this.$emit("filter", this.filterBy)
    },
  },
}
