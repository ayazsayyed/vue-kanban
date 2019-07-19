<template>
  <div>
    <Navbar />
    <div class="container-fluid main-container">
      <div class="row">
        <div class="col-md-12">
          <div >
            <draggable class="board-wrapper" >
              <Taskboard  v-for="(board, key) in fetchBoards" :board="board" :key="key" />
            </draggable>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Taskboard from "./Taskboard";
import Navbar from "./Navbar";
import draggable from "vuedraggable";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Dashboard",
  components: {
    Taskboard,
    Navbar,
    draggable
  },
  computed:{
    ...mapGetters(["fetchBoards"]),
    items: {
      get() {
        return this.board.tasks
      },
      // set(reorderedListItems) {
      //   const payload = {
      //     boardId: this.board.id,
      //     listId: this.list.id,
      //     items: reorderedListItems
      //   }
      //   this.reorderTaskListItems(payload)
      // }
    },
  }
};
</script>

<style>
</style>
