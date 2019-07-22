<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="genericPopup"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <form @submit.prevent="createNewBoard">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create Board</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="newBoard.name"
                      class="form-control"
                      placeholder="Project Name"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      v-model="newBoard.description"
                      type="text"
                      rows="3"
                      class="form-control"
                      placeholder="Project Description"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from "./../../utils/bus";
import { mapActions } from "vuex";
export default {
  name: "NewBoardPopup",
  data() {
    return {
      newBoard: {
        name: "",
        description: "",
        id: ""
      }
    };
  },
  created() {
    Bus.$on("open-new-popup", this.showCreateNewBoardPopup);
    Bus.$on("closePopup", this.closePopup);
  },
  methods: {
    ...mapActions({ saveTaskBoard: "saveTaskBoard" }),
    showCreateNewBoardPopup() {
      this.newBoard.name = "";
      this.newBoard.description = "";
      this.newBoard.id = "";
      this.newBoard.createdAt = "";
      $("#genericPopup").modal("show");
    },
    createNewBoard() {
      console.log("form submitt", this.newBoard);
      this.newBoard.id = this.saveTaskBoard({
        id: this.newBoard.id,
        name: this.newBoard.name,
        description: this.newBoard.description
      });
    },
    closePopup() {
      $("#genericPopup").modal("hide");
    }
  }
};
</script>

<style>
</style>
