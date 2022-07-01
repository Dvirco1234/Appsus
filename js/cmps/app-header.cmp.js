export default {
    template: `
    <header class="app-header flex space-between align-center">
    <div class="logo">
        <router-link to="/"><h3>appsus</h3></router-link>
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
                    <!-- <div class="r-link flex space-between align-center">
            <router-link to="/book">
              <span class="material-symbols-outlined">text_snippet</span>
              Books
            </router-link>
          </div> -->
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
