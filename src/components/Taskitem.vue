<template>
  <div>
    <li class="task-item" >
      <div class="task-item-header">
        <div class="task-priority High" >High Priority</div>
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
          <div class="add-icon">+</div>
          <div class="user-avatar">
            <img
              src="https://lh3.googleusercontent.com/-bgFoHk_lLYY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf2LrPUhb82RyJfhwKvr36tZ81NBg.CMID/s32-c/photo.jpg"
              alt
            />
          </div>
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
  created(){
      console.log('task', this.task);
      
  },
  computed: {
  },
};
</script>

<style>
</style>
