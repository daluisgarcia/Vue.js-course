<template>
    <div>
        <h1>Vuex example</h1>
        <p>The counter value is: {{ $store.state.count }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        props: [

        ],
        methods:{
            increment(){
                this.$store.commit('increment');
                console.log(this.$store.state.count)
            },
            decrement(){
                this.$store.commit('decrement');
                console.log(this.$store.state.count)
            },
        },
    }
</script>

<style scoped>

</style>