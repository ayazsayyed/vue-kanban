<template>
  <div>
    <div class="task-board" :data-board-name="list.name">
      <div class="board-header">
        <p class="board-name">{{ list.name }}</p>
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
      <div class="board-content">
        <ul class="task-list">
          <draggable v-model="items" v-bind="dragOptions" class="list-group">
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <Taskitem
                v-for="item in items"
                :item="item"
                :list="list"
                :board="board"
                :key="item.id"
              />
              
            </transition-group>
          </draggable>
          <taskItemTemplate v-if="showTemplate" :list="list" />
        </ul>
      </div>
      <div class="board-footer">
        <a class="add-task-btn" @click="createNewTask(0)">
          Add task
          <span>+</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Taskitem from "./Taskitem";
import taskItemTemplate from "./TaskItemTemplate";
import { Bus } from "./../utils/bus";
import { mapActions } from "vuex";
export default {
  components: {
    Taskitem,
    draggable,
    taskItemTemplate
  },
  props: ["board", "list"],
  data() {
    return {
      isEditing: false,
      drag: false,
      showTemplate:false
    };
  },
  created() {
     Bus.$on('remove-template', this.removeTemplate )
  },
  computed: {
    defaultItem() {
      return {
        id: "",
        text: ""
      };
    },
    dragOptions() {
      return {
        animation: "200",
        ghostClass: "ghost",
        group: "kanban-board-list-items"
        // disabled: this.isEditing || !this.shouldAllowTaskItemsReorder
      };
    },
    items: {
      get() {
        return this.list.items;
      },
      set(reorderedListItems) {
        const payload = {
          boardId: this.board.id,
          listId: this.list.id,
          items: reorderedListItems
        };
        this.reorderTaskListItems(payload);
      }
    },
    shouldAllowTaskItemsReorder() {
      return this.isDesktop || this.isTablet;
    }
  },
  methods: {
    ...mapActions({
      reorderTaskListItems: "reorderTaskListItems",
      saveTaskListItem: "saveTaskListItem"
    }),
    removeTemplate(data){
      console.log('remove template ', data)
      this.showTemplate = false;
    },
    createNewTask(){
      // console.log('list ', )
      this.showTemplate = true;

      
      // this.saveTaskListItem({
      //   boardId: this.$route.params.id,
      //   listId:this.list.id,
      //   item:{id:5},
      //   name:"hello"}
      // )
    },
    itemEditing() {
      this.isEditing = true;
    },
    itemEdited() {
      this.isEditing = false;
    },
    itemCancelled() {
      this.isEditing = false;
    }
  }
};
</script>

<style>
.sortable-chosen.ghost .task-item {
  background: repeating-linear-gradient(
    145deg,
    transparent,
    transparent 5px,
    #e8eaf1 5px,
    #e8eaf1 10px
  );
  border: 2px solid#e2e2e2;
}

.flip-list-move {
  transition: transform 0.2s;
}
.no-move {
  transition: transform 0s;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
