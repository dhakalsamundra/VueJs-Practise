const app = Vue.createApp({
    // template: "<h1>I am samundra Dhakal</h1>"
    data(){
        return{
            title: "Awesome Vue JS Tutorial",
            author: "Samundra Dhakal",
            age: 31
        }
    },
    methods: {
        changeTitle(titleName){
            this.title = titleName
        }
    }
})


app.mount("#app");