<template>
  <div>
    <Navbar />
    <div class="container-fluid main-container">
      <div class="row equal">
      <div class="col-xs-12 col-sm-6 col-md-3 d-flex pb-3" v-for="board in unarchivedBoards" :key="board.id">
        <div class="card w-100 board-item">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title flex-nowrap">{{ board.name }}</h5>
              <span @click="handleTaskBoardEditing(board)">...</span>
            </div>
            <p class="card-text">{{ board.description }}</p>
          </div>
          <div class="card-footer bg-transparent">
            <router-link class="btn btn-sm btn-app mr-2 mb-1" :to="{ name: 'task-board', params: { id: board.id } }"
              >View</router-link
            >
            <button class="btn btn-sm btn-danger mb-1" @click="handleArchiveTaskBoard(board)">
              Archive
            </button>
          </div>
        </div>
      </div>
    </div>
    
      <div class="row">
        <div class="col-md-12">
          <div >
            <!-- <draggable class="board-wrapper" >
              <Taskboard  v-for="(board, key) in fetchBoards" :board="board" :key="key" />
            </draggable> -->
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { Bus } from "./../utils/bus"
import Navbar from './Navbar'
export default {
  components:{
    Navbar
  },
  computed: {
    ...mapGetters({
      unarchivedBoards: "unarchivedBoards",
      archivedBoards: "archivedBoards"
    })
  },
  methods: {
    ...mapActions({
      setActiveTaskBoard: "setActiveTaskBoard",
      archiveTaskBoard: "archiveTaskBoard",
      restoreTaskBoard: "restoreTaskBoard"
    }),
    handleTaskBoardEditing(board) {
      Bus.$emit("taskboard-editing", board)
    },
    handleArchiveTaskBoard(board) {
      this.archiveTaskBoard({ boardId: board.id })
    },
    handleRestoreTaskBoard(board) {
      this.restoreTaskBoard({ boardId: board.id })
    }
  },
  async created() {
    
    
    await this.setActiveTaskBoard({
      board: null
    })
  }
}
</script>

<style>
</style>
