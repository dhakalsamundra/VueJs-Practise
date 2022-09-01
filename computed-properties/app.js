const app = Vue.createApp({
    // template: "<h1>I am samundra Dhakal</h1>"
    data(){
        return{
            url: "https://www.facebook.com",
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav:true},
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpeg', isFav:false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpeg', isFav:true },
              ],
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(item){
            item.isFav = !item.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((each) =>each.isFav)
        }
    }
})


app.mount("#app");