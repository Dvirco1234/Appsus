export default {
    template: `
    <header class="app-header flex space-between align-center">
    <div class="logo">
        <router-link to="/"><h3>appsus</h3></router-link>
      </div>
      <nav class="header-nav">
        <button class="apps-icon flex" @click="toggleNav"><img src="img/apps-icon.png"></button>
        <div v-if="isLinksOpen" class="links">
          <div class="r-link flex space-between align-center"><router-link to="/">Home</router-link></div>
          <div class="r-link flex space-between align-center"><router-link to="/book">Books</router-link></div>
          <div class="r-link flex space-between align-center"><router-link to="/mail">mail</router-link></div>
          <div class="r-link flex space-between align-center"><router-link to="/keep">keep</router-link></div>
        </div>
      </nav>
    </header>
    `,
    data() {
        return {
          isLinksOpen: false,
        }
    },
    methods: {
      toggleNav(){
        this.isLinksOpen = !this.isLinksOpen
      }
    },
    computed: {},
}
