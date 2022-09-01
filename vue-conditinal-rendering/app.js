const app = Vue.createApp({
    // template: "<h1>I am samundra Dhakal</h1>"
    data(){
        return{
            showBooks: true,
            title: "Awesome Vue JS Tutorial",
            author: "Samundra Dhakal",
            age: 31,
            x:0,
            y:0
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