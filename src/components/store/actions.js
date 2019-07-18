import axios from "axios"

export default {
    async fetchData({ commit }) {
        console.log('asd')
        return axios.get(INITIAL_DATA_URL).then(res => {
            commit("SET_INITIAL_DATA", res.data)
            
        })
    },
    async saveTaskBoard({ commit }, payload) {
        commit("SAVE_TASKBOARD", payload)
    },
    async archiveTaskBoard({ commit }, payload) {
        commit("ARCHIVE_TASKBOARD", payload)
    },
    async addTaskToBoard({ commit }, payload) {
        console.log(payload)
        commit("ADD_TASK_TO_BOARD", payload)
    },
}