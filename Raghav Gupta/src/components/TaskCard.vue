<template>
    <div>
        <p>{{ task.text }}</p>
        <input v-show="isEditing" v-model="taskText" />
        <div>
            <button @click="moveTaskById" :disabled="isLast">Move</button>
            <button @click="editing" :disabled="isEmployee">Edit</button>
            <button @click="deleteTaskById" :disabled="isEmployee">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "TaskCard",
    props: {
        task: {
            type: Object,
            required: true
        },
        isEmployee: {
            type: Boolean,
            default: true,
        }
    },
    mounted () {
        this.taskText = this.task.text
    },
    data () {
        taskText: ''
    },
    computed: {
        isLast () {
            return this.task.stage === "DONE"
        }
    },
    methods: {
        ...mapActions(["moveTask", "deleteTask"]),
        moveTaskById () {
            this.moveTask(this.task.id)
        },
        deleteTaskById () {
            this.deleteTask(this.task.id)
        }
    }

}

</script>