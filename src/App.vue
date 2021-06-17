<template>
  <div>
    <!-- Making reference to users computed property -->
    <!-- <User v-for="user in users"
          v-bind:key="user.id"
          :name="user.name"
          :email="user.email"
          :phone="user.phone"
          :address="user.address"></User> -->
    <h1>Vue router example</h1>
    <router-link to="/">Users</router-link>
    <router-link to="/counter">Counter</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  //import { mapActions, mapState } from 'vuex';

  //import User from "./components/User";

  export default {
    name: 'App',
    // components: {
    //   User,
    // },
    // data(){
    //   return {
    //     users: []
    //   }
    // },
    // methods:{
    //   ...mapActions(['setUsers']),
    // },
    // computed: {
    //   // Importing the state prop as computed property
    //   ...mapState(['users']),
    // },
    // mounted() {
    //   // Calling the action imported from Vuex store
    //   this.setUsers();
    // }
  }
</script>

<style>

</style>
