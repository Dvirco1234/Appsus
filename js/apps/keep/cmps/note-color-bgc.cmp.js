export default {
  template: `
 <section class="note-color-bgc">
  <div class="list-changeBgc">
    <div v-for="(color,idx) in colors" :key="idx"
        :style="{backgroudColor: color}"
        @click="changeBgc(color)"
       >
    </div>
  </div>
</section>
`,
  data() {
    return {
      colors: [
        "#776868",
        "#94B49F",
        "#DF7861",
        "#ECB390",
        "#82b658",
        "#9CB4CC",
        "#207ce5",
        "#ff0084",
      ],
    }
  },
  created() {},
  methods: {
    changeBgc(color) {
      this.$emit("picked", color)
      console.log(color)
    },
  },
  computed: {},
  unmounted() {},
}
