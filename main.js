const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Fare il bucato',
                done: true,
            },
            {
                text: 'Fare da mangiare',
                done: false,
            },
        ],
        newTodo: '',
        darkMode: false,
    },
    computed: {
        todoDone() {
            return this.todos.filter((todo) => todo.done === true);
        }
    },
    methods: {
        addTodo() {
            if( this.newTodo !== ' ' ) {
                const newTodo = {
                    text: this.newTodo,
                    done: false,
                };
                this.todos.push(newTodo);
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
    },
});