<template>
    <div>
        <h1>Vuex example</h1>
        <p>The counter value is: {{ $store.state.count }}</p>
        <p>Name accessed by mapState: {{ name }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "Counter",
        methods:{
            increment(){
                this.$store.commit('increment');
            },
            decrement(){
                this.$store.commit('decrement');
            },
        },
        computed: mapState({
            // Also can get the state props putting an array with the props name in string
            name: state => state.name,
            age: state => state.age,
        })
    }
</script>

<style scoped>

</style>