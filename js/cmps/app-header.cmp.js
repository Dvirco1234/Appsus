export default {
  template: `
    <header class="app-header flex space-between align-center">
    <div class="logo">
        <router-link to="/"><h2 class="logo">Appsus</h2></router-link>
      </div>
      <nav class="header-nav">
        <button class="apps-icon flex" @click="toggleNav">
          <span class="material-symbols-outlined">apps</span>
        </button>
        <div v-if="isLinksOpen" class="links grid">
          <router-link to="/" class="r-link flex align-center">
            <div class="link-content" @click="toggleNav">
              <span class="material-symbols-outlined">home</span>
              <h4>Home</h4>
            </div>
          </router-link>
          <router-link to="/mail" class="r-link flex align-center">
            <div class="link-content" @click="toggleNav">
              <span class="material-symbols-outlined">mail</span>
              <h4>Mail</h4>
            </div>
          </router-link>
          <router-link to="/keep" class="r-link flex align-center">
            <div class="link-content" @click="toggleNav">
              <span class="material-symbols-outlined">text_snippet</span>
              <h4>Keep</h4>
            </div>
          </router-link>
          <router-link to="/book" class="r-link flex align-center">
            <div class="link-content" @click="toggleNav">
              <span class="material-symbols-outlined">import_contacts</span>
              <h4>Books</h4>
            </div>
          </router-link>
        </div>
        <div class="screen" :class="{open: isLinksOpen}" @click="isLinksOpen = false"></div>
      </nav>
    </header>
    `,
  data() {
    return {
      isLinksOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.isLinksOpen = !this.isLinksOpen
    },
  },
  computed: {},
}
