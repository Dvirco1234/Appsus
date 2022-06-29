export default {
  template: `
  <section class="add-note">
<form @submit.prevent="saveNote">
<input class="add-input" autocomplete="off" v-model="emptyNote.txt" />
</form>

<div class="btns-container">

</div>

</section>
  </section>
  `,
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
