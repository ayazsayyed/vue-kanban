<template>
  <div>
    <li class="task-item">
      <div class="task-item-header">
        <div
          class="task-priority"
          :class="item.priority"
          v-if="showTaskPriority"
          @click="changePriority"
        >{{item.priority}} Priority</div>
        <v-select
          v-model="item.priority"
          :options="['Low','Medium', 'High']"
          v-if="showTaskPriorityDropdown"
          @input="setNewPriority"
          :blur="setNewPriority"
          :clearable="false"
        ></v-select>
      </div>
      <div class="task-item-body">
        <p class="task-title" @click="openTaskDetailPopoup(item)">{{this.item.text}}</p>
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
          <div class="dropdown">
            <div
              class="add-icon"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >+</div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#" v-for="(user, id) in item.assignedUsers" :key="id">
               <div class="user-avatar">
                  <img :src="user.imgURL" alt />
                </div>
                {{user.name}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
    
  </div>
</template>

<script>
import store from "./../store/index";
import { mapActions, mapGetters } from "vuex";
import vSelect from "vue-select";
import { Bus } from "./../utils/bus";
import "vue-select/dist/vue-select.css";
import TaskDetailPopup from './popups/TaskDetailPopup'

export default {
  name: "Taskitem",
  props: ["item", "list", "board"],
  components: {
    "v-select": vSelect,
    TaskDetailPopup
  },
  data() {
    return {
      showTaskPriorityDropdown: false,
      showTaskPriority: true
    };
  },
  methods: {
    changePriority() {
      console.log("changePriority");
      this.showTaskPriorityDropdown = !this.showTaskPriorityDropdown;
      this.showTaskPriority = !this.showTaskPriority;
    },
    setNewPriority(e) {
      console.log("setNewPriority e", e);
      // this.$emit("input", val);
      this.showTaskPriorityDropdown = !this.showTaskPriorityDropdown;
      this.showTaskPriority = !this.showTaskPriority;
    },
    openTaskDetailPopoup(item){
      console.log('clicked')
      
      Bus.$emit("open-task-detail-popup", item);
    }
  },
  created() {
    Bus.$on("search:blur", "hello world");
  },
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
