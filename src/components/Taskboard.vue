<template>
  <div>
    <div
      class="task-board"
      :data-board-name="board.title"
      v-for="(board, key) in fetchBoards"
      :key="key"
    >
      <div class="board-header">
        <p class="board-name">{{board.title}}</p>
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
      <div class="board-content">
        <ul class="task-list">
          <Taskitem :index="key" />
        </ul>
      </div>
      <div class="board-footer">
        <a href="#" class="add-task-btn" @click="createNewTask(key)">
          Add task
          <span>+</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Taskitem from "./Taskitem";
import store from "./store/index";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Taskboard",
  components: {
    Taskitem
  },
  data() {
    return {};
  },
  created() {
    console.log("fetchBoards ", this.fetchBoards);
  },
  computed: {
    ...mapGetters(["fetchBoards"])
  },
  methods: {
    ...mapActions(["addTaskToBoard"]),
    createNewTask(key) {
      let newTask = {
        title: "",
        priority: "Low",
        comments: [],
        attachmets: [],
        assignedUsers: []
      };
      this.addTaskToBoard({ key, newTask });
    }
  }
};
</script>

<style>
</style>
