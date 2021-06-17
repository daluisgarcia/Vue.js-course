import { createStore } from "vuex"

const store = createStore({
    state () {
        return {
          count: 0,
          name: 'Sample name',
          age: 21,
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state){
            state.count--;
        },
    },
});

// Exporting the mutations to the Vue instance
store.commit('increment');
store.commit('decrement');

export default store;