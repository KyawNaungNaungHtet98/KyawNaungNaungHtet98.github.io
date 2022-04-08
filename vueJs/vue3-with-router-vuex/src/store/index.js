import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "Kyaw Naung Naung Htet",
    students: [{name:"Su Su", age:20,gender:"Female"},
              {name:"Kyaw Kyaw",  age:22,gender:"Male"},
              {name:"Mya Mya", age:24,gender:"Female"},
              {name:"Myo Myo", age:29,gender:"Male"},],
    number : 0,
  },
  getters: {
    boys(state){
      return state.students.filter(student => student.gender== "Male")
    }
  },

  // commit there for actions:
  mutations: {
    change(state){
      state.name = "Naung Naung"
    },
    increaseNumber(state){
      state.number++
    },
    decreaseNumber(state){
      state.number--
    }
  },
  // need to commit in mutations:
  actions: {
    change(store){
      store.commit('change')
    },
    increaseNumber(store){
      store.commit('increaseNumber')
    },
    decreaseNumber(store){
      store.commit('decreaseNumber')
    }
  },
  modules: {
  }
})
