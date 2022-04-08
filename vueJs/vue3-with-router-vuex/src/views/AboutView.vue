<template>
  <div class="about">
    {{this.$store.state.name}}
    <input type="text" v-model="this.$store.state.name">
    <h1>This is an about page</h1>
    <button @click="changeData">Change</button>
    <br><br>
    <button @click="decreaseNumber">Decreasing Number</button>
    <span>{{this.$store.state.number}}</span>
    <button @click="increaseNumber">Increasing Number</button><br>
    <div v-for="(student,index) in allBoys" :key="index">{{student.name}} - {{student.age}} - {{student.gender}}</div>
  </div>
</template>

<script>
export default {
  methods:{
    changeData(){
      this.$store.dispatch('change')
    },
    increaseNumber(){
      this.$store.dispatch('increaseNumber')
    },
    decreaseNumber(){
      this.$store.dispatch('decreaseNumber')
    }
  },
  computed:{
    allBoys(){
      return this.$store.getters.boys
    }
  }
}
</script>

<style>
  span{
    color: red;
    padding: 12px;
  }
</style>
