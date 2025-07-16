<template>
    <div>
        <div v-if="isManager">
            <form @submit.prevent="addNewTask">
                <input v-model="newTask" placeholder="Add new task" />
                <button type="submit">Add</button>
            </form>
        </div>
        <div>
            <TaskColumn
                v-for="(stage, i) in stages"
                :key="stage"
                :stage="stage"
                :index="i"
            />
        </div>
    </div>


</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex';
import TaskColumn from './TaskColumn.vue'; 

export default {
    name: "Task",
    components: {
        TaskColumn,
    },
    data () {
        return {
            isManager: true,
            newTask: '',
            stages: ["NEW", "IN PROGRESS", "DONE"]
        }
    },
    computed: {
        ...mapState(['tasks']),
        newTasks () {
            console.log(this.tasks)
        }
    },
    methods: {
        ...mapActions(["addTask"]),
        addNewTask () {
            const payload = {
                id: 11,
                text: this.newTask,
                stage: "NEW",
            }
            this.addTask(payload)
        }
    }
}

</script>