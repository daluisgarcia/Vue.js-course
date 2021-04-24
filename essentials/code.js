const app = {
    data() { 
        return {
            showPersons: true,
            connected: true,
            age: 18,
            persons: [],
            task: null,
            taskFilter: '',
            tasks: [
                {title: 'Eat', completed: true}, 
                {title: 'Sleep', completed: false}, 
                {title: 'Repeat', completed: false}
            ]
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( (response) => this.persons = response.data )
    },
    methods: {
        addTask(){
            if (this.task) {
                this.tasks.unshift({
                    title: this.task,
                    completed: false
                })
            }
            this.task=null
        },
        checkTask(task) {
            task.completed = !task.completed
        },
        changeShowValue(){
            this.showPersons = !this.showPersons
        }
    },
    computed: {
        tasksCompleted() {
            return this.tasks.filter(item => item.completed)
        },
        filterTaskTitle() {
            if (this.taskFilter == null){
                return true
            }else {
                return this.tasks.filter(item => item.title.includes(this.taskFilter))
            }
        }
    }
};

Vue.createApp(app).mount('#main');