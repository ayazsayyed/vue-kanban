export default {
    fetchBoards: state => state.boards,
    // fetchTasks: state => state.boards,
    fetchTasks: state => index => state.boards[index].tasks,
  }