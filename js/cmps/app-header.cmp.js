export default {
    template: `
    <header class="app-header">
    <div class="logo">
        <router-link to="/"><h3>appsus</h3></router-link>
      </div>
      <nav class="">
        <router-link to="/">Home</router-link> |
        <router-link to="/book">Books</router-link> |
        <router-link to="/mail">mail</router-link> |
        <router-link to="/keep">keep</router-link>
      </nav>
    </header>
    `,
    data() {
        return {}
    },
    methods: {},
    computed: {},
}
