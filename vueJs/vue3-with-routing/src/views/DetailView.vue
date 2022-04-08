<template>
    <div class="detail" v-if="country">
        <h2>Country Detail Page</h2>
            <div class="card mb-3">
    <div class="row g-0">
        <div class="col-md-4">
        <img :src="country.flags.png" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">{{country.capital[0]}}</h5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illum iusto nisi ullam molestiae magni dolor minima eius consectetur nemo.
        </div>
        </div>
    </div>
</div>

    </div>
</template>

<script>
const axios = require('axios').default;
export default {
    data(){
    return {
        country: null,
    }
    },
    mounted(){
        let name = this.$route.params.name
        axios.get('https://restcountries.com/v3.1/name/'+name)
        .then(response => {
        this.country = response.data[0]
        })
    }
}
</script>

<style>
    img{
        height: 320px;
        width: 400px;
    }
</style>