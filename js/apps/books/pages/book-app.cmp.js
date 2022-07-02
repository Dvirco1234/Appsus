import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter-cmp.js'
import bookDetails from '../pages/book-details.cmp.js'
import { showSuccessMsg, eventBus } from '../../../services/eventBus-service.js'

export default {
    template: `
  <section class="book-app main-layout">
    <book-filter class="filter-books" @filtered="filterBooks" :books="books"/>
    <router-link class="add-book-link" to="/book/add">Add new book</router-link>
    <book-list  @removed="removeBook" @selected="selectBook" :books="booksToShow" />
  </section>
`,
    components: {
        bookList,
        bookFilter,
        bookDetails,
    },
    data() {
        return {
            books: [],
            filterBy: null,
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId).then(() => {
            const idx = this.books.findIndex((book) => book.id === bookId)
            this.books.splice(idx, 1)
            showSuccessMsg('Deleted successfully')
        })
        },
        selectBook(book) {
            this.selectedBook = book
        },
        filterBooks(filterBy){
          this.filterBy = filterBy
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.books.filter((book) => regex.test(book.title) && book.listPrice.amount >= this.filterBy.price)
        },
    },
    created() {
        bookService.query().then(books => this.books = books)
    },
}
