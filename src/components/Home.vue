<template>
    <div class="container my-5">
        <h2 class="text-center">VUE 3 ToDo App With LocalStorage</h2>
        <div class="row d-flex justify-content-center">
            <div class="col-md-6 my-3">
                <div class="form-group mb-3">
                    <label for="todo" class="form-label">Add ToDo</label>
                    <input
                        v-model="todo"
                        type="text"
                        class="form-control"
                        name="todo"
                        id="todo"
                        placeholder="Enter New Todo"
                    />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-s float-right"  @click="save" >Add</button>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-3" v-if="ToDos.length">
            <div class="col-md-6">
                <h5 class="mb-3">ToDo List</h5>
                <div style="list-style-type: none;">
                    <li
                        v-for="(todo,index) in ToDos"
                        v-bind:key="index"
                        class="text-left"
                        style="
                        padding: 10px 24px;
                        border-radius: 6px;
                        margin-bottom: 12px;
                        border: 2px solid hsla(0, 0%, 0%, 0.35);
                    "
                    >
                        <div class="row justify-content-center">
                            <div class="col-md-8"><span v-bind:style=" todo.done ? 'text-decoration:line-through;' : '' ">{{ todo.todo }}</span></div>
                            <div class="col-md-2">
                                <span
                                    class="form-check form-switch"
                                    @click="done_todo(todo)"
                                    style="margin-left:20px;"
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        data-onstyle="#1f2023"
                                        :checked="todo.done"
                                        
                                    />
                                </span>
                            </div>
                            <div class="col-md-2">
                                <button
                                    class="btn btn-danger btn-sm"
                                    @click="delete_todo(index)"
                                >Delete</button>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ToDos: [],
        };
    },
    mounted() {
        if (localStorage.getItem("ToDos")) {
            this.ToDos = JSON.parse(localStorage.getItem("ToDos"));
        }
    },
    methods: {
        save() {
            this.ToDos.push({ todo: this.todo, done: false });
            localStorage.setItem("ToDos", JSON.stringify(this.ToDos));
        },
        delete_todo(index) {
            this.ToDos.splice(index, 1);
            localStorage.setItem("ToDos", JSON.stringify(this.ToDos));
        },
        done_todo(todo) {
            todo.done = !todo.done;
            localStorage.setItem("ToDos", JSON.stringify(this.ToDos));
        },
    },
};
</script>