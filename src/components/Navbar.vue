<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-primary-custom">
      <div class="container-fluid">
        <input type="text" class="form-control search-task" placeholder="Search for tasks.." />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-primary"
          aria-controls="navbar-primary"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-primary">
          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Discover
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile</a>
            </li>
            <li class="nav-item add-board-link">
              <button class="btn btn-icon btn-3 btn-secondary" type="button" @click="addNewBoard">
                <span class="btn-inner--icon">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </span>

                <span class="btn-inner--text">New Board</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <NewBoardPopup />
  </div>
</template>

<script>
import { Bus } from "./../utils/bus";
import NewBoardPopup from "./popups/NewBoardPopup";
export default {
  name: "Navbar",
  components: {
    NewBoardPopup
  },
  mounted(){
    
  },
  methods: {
    addNewBoard(e) {
      e.preventDefault();
      Bus.$emit("open-new-popup");
    }
  }
};
</script>

<style lang="scss" scoped>
.add-board-link {
  display: flex;
  align-items: center;
}
</style>
