const INITIAL_DATA_URL = "https://raw.githubusercontent.com/techlab23/data-repository/master/boards.json"
import axios from "axios"

export default {
  async fetchData({ commit }) {
    commit("SET_LOADING_STATE", true)
    return axios.get(INITIAL_DATA_URL).then(res => {
      commit("SET_INITIAL_DATA", res.data)
      commit("SET_LOADING_STATE", false)
    })
  },
  async saveTaskBoard({ commit }, payload) {
    commit("SAVE_TASKBOARD", payload)
  },
  async archiveTaskBoard({ commit }, payload) {
    commit("ARCHIVE_TASKBOARD", payload)
  },
  async restoreTaskBoard({ commit }, payload) {
    commit("RESTORE_TASKBOARD", payload)
  },
  async setActiveTaskBoard({ commit }, payload) {
    commit("SET_ACTIVE_TASKBOARD", payload)
  },

  async saveTaskList({ commit }, payload) {
    commit("SAVE_TASKLIST", payload)
  },
  async archiveTaskList({ commit }, payload) {
    commit("ARCHIVE_TASKLIST", payload)
  },
  async restoreTaskList({ commit }, payload) {
    commit("RESTORE_TASKLIST", payload)
  },

  async reorderTaskLists({ commit }, payload) {
    commit("REORDER_TASKLISTS", payload)
  },
  async reorderTaskListItems({ commit }, payload) {
    commit("REORDER_TASKLIST_ITEMS", payload)
  },

  async saveTaskListItem({ commit }, payload) {
    commit("SAVE_TASKLIST_ITEM", payload)
  },
  async deleteTaskListItem({ commit }, payload) {
    commit("DELETE_TASKLIST_ITEM", payload)
  }
}
