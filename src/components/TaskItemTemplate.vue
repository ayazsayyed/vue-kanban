<template>
  <div>
    <li class="task-item">
      <div class="task-item-header">
        <!-- <div class="task-priority" :class="priority">{{priority}} Priority</div> -->
      </div>
      <div class="task-item-body">
        <!-- <p class="task-title">{{text}}</p> -->
        <label for="">Task name:</label>
        <input type="text" class="form-control" ref="taskTitle" v-model="taskName" @blur="saveItem" />
      </div>
      <div class="task-item-footer">
        <!-- <div class="comments-attachments">
          <div class="comments">
            <i class="far fa-comment-alt"></i> 1
          </div>
          <div class="attachment">
            <i class="fa fa-paperclip"></i> 2
          </div>
        </div>-->
        <!-- <div class="assigned-users">
          <div class="user-avatar" v-for="(user, id) in item.assignedUsers" :key="id">
            <img :src="user.imgURL" alt />
          </div>
          <div class="add-icon">+</div>
        </div>-->
      </div>
    </li>
  </div>
</template>
<script>
import { Bus } from "./../utils/bus";
import { mapActions } from "vuex";

export default {
  name: "TaskItemTemplate",
  props: ["list"],
  components: {},
  data() {
    return {
      priority: "Low",
      taskName: ""
    };
  },
  mounted() {
    this.$refs.taskTitle.focus();
    console.log("list ", this.list);
  },
  methods: {
    ...mapActions({
      saveTaskListItem: "saveTaskListItem"
    }),
    saveItem() {
      Bus.$emit("remove-template", this.list.id);
      console.log("this.taskTitle.trim().length ", this.taskName.trim().length);
      if (this.taskName.trim().length <= 0) {
        Bus.$emit("remove-template", this.list.id);
      } else {
        this.saveTaskListItem({
          boardId: this.$route.params.id,
          listId: this.list.id,
          item: {
            id: 5,
            text: this.taskName,
            priority:"Low",
            assignedUsers:[]
          }
        });
        Bus.$emit("remove-template", this.list.id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
