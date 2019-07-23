<template>
  <div>
    <li class="task-item">
      <div class="task-item-header">
        <div class="task-priority" :class="item.priority">{{item.priority}} Priority</div>
      </div>
      <div class="task-item-body">
        <p class="task-title">{{this.item.text}}</p>
        <!-- <textarea type="text" class="form-control task-title" :value="task.title" rows="2"></textarea> -->
      </div>
      <div class="task-item-footer">
        <div class="comments-attachments">
          <div class="comments">
            <i class="far fa-comment-alt"></i> 1
          </div>
          <div class="attachment">
            <i class="fa fa-paperclip"></i> 2
          </div>
        </div>
        <div class="assigned-users">
          <div class="user-avatar" v-for="(user, id) in item.assignedUsers" :key="id">
            <img :src="user.imgURL" alt />
          </div>
          <div class="add-icon">+</div>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import store from "./../store/index";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Taskitem",
  props: ["item", "list", "board"],
  created() {},
  computed: {}
};
</script>

<style scoped lang="scss" >
.assigned-users {
  .user-avatar {
    margin-right: -15px;
  }
}
.assigned-users .add-icon {
  margin-left: 20px;
  cursor: pointer;
}
</style>
