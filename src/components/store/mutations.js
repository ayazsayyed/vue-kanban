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
    // Archive Task Board
    ARCHIVE_TASKBOARD(state, payload) {
        console.log('state ', state);
        console.log('payload ', payload);
        
        const board = state.boards.find(b => b.id == payload.boardId)
        const boardIdx = state.boards.findIndex(b => b.id == payload.boardId)
        Vue.swal({
            title: 'Are you sure?',
            text: "It will permanently deleted !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function() {
            Vue.swal(
              'Deleted!',
              // state.boards.splice(boardIdx, 1),
              'Your file has been deleted.',
              'success'
            );
          });
        // state.boards.splice(boardIdx, 1);
        // board.archived = true
        // Vue.set(state.boards, boardIdx, board)
    },
}