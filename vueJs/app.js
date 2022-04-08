const app = Vue.createApp({
    // template : '<h2>I am Template</h2>',
    data(){
        return{
            name    :   "Naung Naung",
            age     :   22,
            icon    :   "<strong>Panda</strong>",
            status  :   true,
            title   :   "My paragraph",
            photo   :   "../background.jpg",
            mark    :   30,
            favfruit:   ['apple','orange','banana'],
            count   :   0,
            fname   :   "",
            ffname  :   "",
            ffage   :   "",
            ffgender:   "",
            friends :   [],
        }
    },
    methods:{
        greet(){
            alert (this.name)
        },
        savefriends(){
            let friend = {name: this.ffname, age: this.ffage, gender: this.ffgender}
            console.log(friend)
            this.friends.push(friend)
        }
    }
})
app.mount("#app")

// testing
// const appli = Vue.createApp({
//     // template : '<h2>I am Template</h2>',
//     data(){
//         return{
//             name: "Naung Naung",
//             age : 22,
//         }
//     }
// })
// appli.mount(".app")