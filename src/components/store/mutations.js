import Vue from "vue"
export default {
    // Set Initial Data
    SET_INITIAL_DATA(state, payload) {
        state.boards = payload
    },
    SAVE_TASKBOARD(state, payload) {
        console.log('state', state)
        console.log('payload', payload);
        state.boards.push(payload)
    },
    ADD_TASK_TO_BOARD(state, payload) {
      state.boards[payload.key].tasks.push(payload.newTask)
        console.log('payload', payload);
    },
    // reorder
    REORDER_TASKLISTS(state, payload) {
      console.log('payload ', payload);
      
      const board = state.boards.find(b => b.id == payload.boardId)
      const listIdx = board.lists.findIndex(l => l.id == payload.listId)
      Vue.set(board.lists[listIdx], "items", payload.items)
    },
}