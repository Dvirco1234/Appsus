import notePreview from "../cmps/note-preview.cmp.js"

export default {
  props: ["notes"],
  template: `
<section class="note-list" >
        <note-preview v-for="note in notes"
        :note="note" /> 
</section>
  `,
  data() {
    return {}
  },
  created() {},
  methods: {},
  components: {
    notePreview,
  },
}
