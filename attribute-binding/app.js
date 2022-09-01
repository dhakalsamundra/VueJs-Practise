const app = Vue.createApp({
    // template: "<h1>I am samundra Dhakal</h1>"
    data(){
        return{
            url: "https://www.facebook.com",
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg' },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/1.png' },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/2.jpg' },
              ],
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(event, int){
            console.log(event, event.type)
            if(int){
                console.log(int)
            }
        },
        handleMousemove(event){
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})


app.mount("#app");