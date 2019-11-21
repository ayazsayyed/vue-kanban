<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="TaskDetailPopup"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-zoom" role="document">
        <div class="modal-content" v-if="isLoading">...</div>
        <div class="modal-content" v-else>
          
            <div class="modal-header">
              <h5
                class="modal-title"
                id="exampleModalLabel"
              >Task Details </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <h3>{{item.text}}</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum rem, assumenda dolorum ratione facilis facere delectus ullam quae, harum molestias praesentium et alias, numquam deserunt ab nulla soluta eius.</p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from "./../../utils/bus";
import { mapActions } from "vuex";
export default {
  name: "TaskDetailPopup",
  data() {
    return {
      isLoading:true,
      item:null
    };
  },
  created() {
    Bus.$on("open-task-detail-popup", this.showTaskDetailPopupPopup);
    Bus.$on("closePopup", this.closePopup);
  },
  methods: {
   
    showTaskDetailPopupPopup(item) {
      this.item = item;
      this.isLoading = false
      $("#TaskDetailPopup").modal("show");
    },
    
    closePopup() {
      this.item = null;
      this.isLoading = true
      $("#taskDetailPopup").modal("hide");
    }
  }
};
</script>

<style scoped>
  .modal.fade .modal-dialog.modal-dialog-zoom {-webkit-transform: translate(0,0)scale(.5);transform: translate(0,0)scale(.5);}
.modal.show .modal-dialog.modal-dialog-zoom {-webkit-transform: translate(0,0)scale(1);transform: translate(0,0)scale(1);}
</style>
