<template>
  <div>
    <div
      class="task-board" :data-board-name="board.title"
    >
      <div class="board-header">
        <p class="board-name">{{board.title}}</p>
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
      <div class="board-content">
        <ul class="task-list">
          <draggable v-model="lists" >
              <Taskitem v-for="(task, key) in lists" :task="task" :key="key" :index="key" />
          </draggable>
        </ul>
      </div>
      <div class="board-footer">
        <a href="#" class="add-task-btn" @click="createNewTask(0)">
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
import draggable from "vuedraggable";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Taskboard",
  props:['board'],
  components: {
    Taskitem,
    draggable
  },
  data() {
    return {};
  },
  created() {
    console.log("this.boards ", this.board);
  },
  computed: {
    ...mapGetters(["fetchTasks"]),
     lists: {
      get() {
        return this.fetchTasks(1)
      },
      async set(value) {
        console.log('value ', value);
        
        await this.reorderTaskLists({
          boardId: 1,
          lists: value
        })
      }
    }
    // ...mapGetters([""])
  },
  methods: {
    ...mapActions(["addTaskToBoard", "reorderTaskLists"]),
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
