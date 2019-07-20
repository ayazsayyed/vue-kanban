<template>
  <div>
    <Navbar />
    <div class="container-fluid main-container">
      <div class="board-wrapper">
        <draggable v-model="lists" class="row flex-nowrap mt-1 scrollable-div" v-bind="getDragOptions">
          <TaskList
            v-for="(listItem, index) in lists"
            :key="index"
            :board="getBoard"
            :list="listItem"
          ></TaskList>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import Taskitem from "./Taskitem";
import Navbar from "./Navbar";
import TaskList from "./Tasklist";
import store from "./../store/index";
import draggable from "vuedraggable";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Taskboard",
  props: ["board"],
  components: {
    Taskitem,
    TaskList,
    draggable,
    Navbar
  },
  data() {
    return {};
  },
  created() {
    console.log("this.boards ", this.param);
  },
  computed: {
    ...mapGetters({
      boards: "allBoards",
      isLoading: "isLoading"
    }),
    getDragOptions() {
      return {
        animation: "200",
        ghostClass: "ghost",
        handle: ".board-header",
        // disabled: !this.shouldAllowListOrder,
        group: "kanban-board-lists"
      };
    },
    param() {
      return this.$route.params.id;
    },
    shouldAllowListOrder() {
      return this.isDesktop || this.isTablet;
    },
    getBoard() {
      return this.boards.find(b => b.id == this.param);
    },
    lists: {
      get() {
        return this.getBoard
          ? this.getBoard.lists.filter(l => !l.archived)
          : [];
      },
      async set(value) {
        await this.reorderTaskLists({
          boardId: this.param,
          lists: value
        });
      }
    }
  },
  methods: {
    // ...mapActions(["addTaskToBoard", "reorderTaskLists"]),
    ...mapActions({
      reorderTaskLists: "reorderTaskLists",
      setActiveTaskBoard: "setActiveTaskBoard"
    }),
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
