import { bookService } from '../services/book-service.js'
import longText from '../../../cmps/long-text.cmp.js'
import reviewAdd from '../cmps/review-add.cmp.js'

export default {
    template: `
    <section v-if="book" class="book-details main-layout">
        <div class="book-details-nav flex space-between">
            <router-link to="/book">&lt; Back to books</router-link>
            <router-link :to="'/book/' + nextBookId"> Next Book &gt;</router-link>
        </div>
      <article class="book-details-container">
        <div class="book-img">
          <img :src="book.thumbnail">
          <img v-if="book.listPrice.isOnSale" class="sale-img" src="./img/sale.svg" alt="Sale SVG"/>
        </div>
        <div class="details">
          <h5 class="tag">{{ readingLength }}</h5>
          <h5 class="tag">{{ bookAge }}</h5>
          <h4>{{ book.title }}</h4>
          <h5>{{ book.subtitle }}</h5>
          <p>By:
                <span v-for="author in book.authors">
                    {{author}}
                </span>
          </p>
          <h5>Price: <span :class="priceColor">{{ bookPrice }}</span></h5>
          <p>Categories:
            <span v-for="cat in book.categories">
              {{ cat }}, 
            </span>
          </p>
          <h4>Description:</h4>
          <long-text :txt="book.description"/>
          <div v-if="book.reviews">
            <h3>Readers reviews:</h3>
            <ul>
                <li v-for="review in book.reviews" class="review">
                    <h4>{{review.name}}</h4>
                    <p>Read at {{review.readAt}}</p>
                    <span v-for="num in review.rate">★</span>
                    <p>{{review.txt}}</p>
                </li>
            </ul>
          </div>
        </div>
      </article>
      <review-add :book="book"/>
    </section>
`,
    components: {
        longText,
        reviewAdd,
    },
    data() {
        return {
            book: null,
            nextBookId: null,
        }
    },
    created() {
    },
    methods: {

    },
    computed: {
        titleToUpper() {
            return (
                this.book.title[0].toUpperCase() + this.book.title.substring(1)
            )
        },
        bookPrice() {
            const currency = this.book.listPrice.currencyCode
            return new Intl.NumberFormat(currency, {
                style: 'currency',
                currency,
            }).format(this.book.listPrice.amount)
        },
        readingLength() {
            const pageCount = this.book.pageCount
            if (pageCount > 500) return '# Long reading'
            else if (pageCount > 200) return '# Decent Reading'
            else if (pageCount < 100) return '# Light Reading'
        },
        bookAge() {
            const bookAge = new Date().getFullYear() - this.book.publishedDate
            if (bookAge > 10) return '# Veteran book'
            else if (bookAge <= 1) return '# New!'
        },
        priceColor() {
            const price = this.book.listPrice.amount
            return { red: price > 150, green: price < 20 }
        },
    },
    watch: {
        '$route.params.bookId':{
            handler() {
                const id = this.$route.params.bookId
                bookService.get(id)
                    .then(book => {
                        this.book = book
                        bookService.getNextBookId(book.id)
                            .then(nextBookId => this.nextBookId = nextBookId)
                })
            },
            immediate: true
        }
    }
}
