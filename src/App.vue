<template>
  <div>
    <!-- Making reference to users computed property -->
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
  import { mapActions, mapState } from 'vuex';

  import User from "./components/User";
  import Counter from "./components/Counter";

  export default {
    name: 'App',
    components: {
      User,
      Counter,
    },
    // data(){
    //   return {
    //     users: []
    //   }
    // },
    methods:{
      ...mapActions(['setUsers']),
    },
    computed: {
      // Importing
      ...mapState(['users']),
    },
    mounted() {
      // Calling the action imported from Vuex store
      this.setUsers();
    }
  }
</script>

<style>

</style>
