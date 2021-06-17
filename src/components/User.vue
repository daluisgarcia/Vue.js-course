<template>
    <div>
        <div v-for="user in users"
             v-bind:key="user.id">
            <p>Name: {{user.name}}</p>
            <p>Email: {{user.email}}</p>
            <p>Phone: {{user.phone}}</p>
            <hr>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        name: "User",
        //props: ['name', 'email','phone'] Regular props
        // props: { //Props with validations
        //     name:String,
        //     email:String,
        //     phone:String
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

<style scoped>

</style>