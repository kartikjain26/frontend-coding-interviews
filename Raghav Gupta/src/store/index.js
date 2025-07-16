import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// TASK = {id, text, stage}

const STAGES = ["NEW", "IN PROGRESS", "DONE"]

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    taskByStage: (state) => (stage) => {
      return state.tasks.filter(t => t.stage === stage)
    }
  },
  mutations: {
    ADD_TASKS (state, task) {
      state.tasks.push(task)
      console.log(state.tasks)
    },
    UPDATE_TASK (state, payload) {
      let selectedTask = state.tasks.find(t => t.id === payload.id)
      if (selectedTask) {
        selectedTask = {
          ...selectedTask,
          ...payload.body,
        }
      }
    },
    MOVE_TASK (state, id) {
      const task = state.tasks.find(t => t.id === id)
      if (!task) return;

      const currentStage = STAGES.indexOf(task.stage);
      const newStage = currentStage + 1;

      if (newStage < STAGES.length) {
        task.stage = STAGES[newStage];
      }
    },
    DELETE_TASK (state, id) {
      state.tasks = state.tasks.filter(t => t.id !== id);
    }
  },
  actions: {
    moveTask ({commit}, payload) {
      commit("MOVE_TASK", payload)
    },
    deleteTask ({commit}, payload) {
      commit("DELETE_TASK", payload)
    },
    addTask ({commit}, payload) {
      commit("ADD_TASKS", payload)
    }
  },
  modules: {},
});
