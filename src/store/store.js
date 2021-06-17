import axios from "axios";
import { createStore } from "vuex"

const store = createStore({
    state () {
        return {
          count: 0,
          name: 'Sample name',
          age: 21,
          users: [],
        }
    },
    mutations: {  // For simple actions
        increment(state) {
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        getUsersAsync(state){
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then( (response) => state.users = response.data );
        }
    },
    getters: {
        listUsers(state) {
            return state.users;
        },
    },
    actions: {  // For async actions
        setUsers(context) {
            context.commit('getUsersAsync');
        }
    }
});

export default store;