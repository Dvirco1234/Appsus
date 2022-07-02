import { bookService } from '../services/book-service.js'

export default {
    template: `
        <section class="main-layout">
            <h3>Add book</h3>
            <datalist :id="listId">
                <!-- <option v-for="opt in info.opts" :value="opt" /> -->
            </datalist>
            <form @submit.prevent="searchBook">
                <!-- {{info.label}} -->
                <input type="search" v-model="searchTxt" placeholder="Search book" :list="listId">
                <button>Search</button>
            </form>
            <div class="results">
                <div v-for="book in books" class="res">
                    <h4>{{book.title}}</h4>
                    <router-link to="/book">
                        <button @click="addBook(book)">+</button>
                    </router-link>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            books: null,
            searchTxt: null,
        }
    },
    created() {},
    methods: {
        searchBook(){
            bookService.getGoogleBooks(this.searchTxt)
                .then(books => this.books = books)
        },
        addBook(book) {
            bookService.addGoogleBook(book)
        }
    },
    computed: {
        listId() {
            return 'list' + this._uid
        },
    },
    unmounted() {},
}
