<template>
  <div>
    <User v-for="user in users"
          v-bind:key="user.id"
          :name="user.name"
          :email="user.email"
          :phone="user.phone"
          :address="user.address"></User>
    <Counter></Counter>
  </div>
</template>

<script>
  import axios from 'axios';
  import User from "./components/User";
  import Counter from "./components/Counter";

  export default {
    name: 'App',
    components: {
      User,
      Counter,
    },
    data(){
      return {
        users: []
      }
    },
    methods:{
      getUsers(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( (response) => this.users = response.data )
      }
    },
    mounted() {
      this.getUsers();
    }
  }
</script>

<style>

</style>
