const bmi = Vue.createApp({
    data(){
        return{
            status: false,
            weight : "",
            heightFt : "",
            heightInc   :   "",
            body    : "",
        }
    },
    methods:{
        calculate(){
            this.status=true;
            this.body = ((this.weight/((this.heightFt*12+this.heightInc)*(this.heightFt*12+this.heightInc)))*703).toFixed(2)
        }
    }
})
bmi.mount("#bmi")