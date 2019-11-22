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
      <div
        class="modal-dialog modal-lg modal-dialog-centered modal-dialog-zoom task-detail-modal"
        role="document"
      >
        <div class="modal-content" v-if="isLoading">...</div>
        <div class="modal-content" v-else>
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Task Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <h2 class="task-name task-heading">
                  <img src="./../../assets/task-name.svg" class="img-task-name" />
                  Task Name
                </h2>
                <h2 class="task-name-text">{{item.text}}</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="assigned-members">
                  <h2 class="task-heading">Assigned Members</h2>
                  <div class="member-wrapper">
                    <ul>
                      <li>
                        <img
                          src="https://lh3.googleusercontent.com/-bgFoHk_lLYY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf2LrPUhb82RyJfhwKvr36tZ81NBg.CMID/s32-c/photo.jpg"
                          class="user-img"
                          alt
                        />
                      </li>
                      <li>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfFZCBzWumfdKses7xLH669oYa6hVdNUM5WITqwPhw-wl8-EJRA"
                          class="user-img"
                          alt
                        />
                      </li>
                      <li>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7x9Eh_d0nx-xnGCUBhcpL2_gs-_pRZAADsPDJCltX49ySU5xxA"
                          class="user-img"
                          alt
                        />
                      </li>

                      <li>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfFZCBzWumfdKses7xLH669oYa6hVdNUM5WITqwPhw-wl8-EJRA"
                          class="user-img"
                          alt
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="labels">
                  <h2 class="task-heading">Labels</h2>
                </div>
              </div>
              <div class="col-md-4">
                <div class="due-date">
                  <h2 class="task-heading">Due Date</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
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
      isLoading: true,
      item: null
    };
  },
  created() {
    Bus.$on("open-task-detail-popup", this.showTaskDetailPopupPopup);
    Bus.$on("closePopup", this.closePopup);
  },
  methods: {
    showTaskDetailPopupPopup(item) {
      this.item = item;
      this.isLoading = false;
      $("#TaskDetailPopup").modal("show");
    },

    closePopup() {
      this.item = null;
      this.isLoading = true;
      $("#taskDetailPopup").modal("hide");
    }
  }
};
</script>

<style scoped lang="scss">
.modal.fade .modal-dialog.modal-dialog-zoom {
  -webkit-transform: translate(0, 0) scale(0.5);
  transform: translate(0, 0) scale(0.5);
}
.modal.show .modal-dialog.modal-dialog-zoom {
  -webkit-transform: translate(0, 0) scale(1);
  transform: translate(0, 0) scale(1);
}
.task-detail-modal {
  .task-heading {
    font-size: 16px;
    color: rgb(120, 129, 149);
    font-weight: 500;
    margin-top: 0;
    display: flex;
    align-items: center;
    .img-task-name {
      width: 16px;
      height: 20px;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
  .task-name-text {
    font-size: 20px;
    color: #000;
  }
  .assigned-members {
    .member-wrapper {
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          img.user-img {
            width: 35px;
            margin: 0 8px 8px 0;
            border-width: 1px;
            border-style: dashed;
            border-color: rgb(168, 170, 189);
            border-image: initial;
            border-radius: 10% 30% 25%;
          }
        }
      }
    }
  }
}
</style>
