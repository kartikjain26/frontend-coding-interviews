<template>
    <div>
        <h1>{{ stage }}</h1>
        <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskCard from './TaskCard.vue';


export default {
    name: "TaskColumn",
    components: {
        TaskCard,
    },
    props: {
        stage: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapGetters(["taskByStage"]),
        tasks() {
            return this.taskByStage(this.stage);
        }
    }
}
</script>