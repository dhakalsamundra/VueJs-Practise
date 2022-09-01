const app = Vue.createApp({
    // template: "<h1>I am samundra Dhakal</h1>"
    data(){
        return{
            showBooks: true,
            books: [
                {title: "Life of Pie", author: "samundra Dhakal"},
                {title: "Silence is the meditation", author: "Narayan Sharma"},
                {title: "Act is better that react", author: "Yojana Dhakal"},
                {title: "Fly like the swift", author: "Sandesh Dhakal"}
            ]
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