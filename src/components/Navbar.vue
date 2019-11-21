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
              <div class="dropdown">
                <button
                  class="btn btn-icon btn-3 btn-secondary"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="btn-inner--text">New</span>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a
                    class="dropdown-item"
                    href="#"
                    v-if="buttonType == 'dashboard'"
                    @click="addNewBoard"
                  >New Board</a>
                  <a
                    class="dropdown-item"
                    href="#"
                    v-if="buttonType == 'taskboard'"
                    @click="addNewList"
                  >New List</a>
                  <a class="dropdown-item" href="#" @click="openTeamPopoup">Team</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <NewBoardPopup />
    <TeamPopup />
  </div>
</template>

<script>
import { Bus } from "./../utils/bus";
import NewBoardPopup from "./popups/NewBoardPopup";
import TeamPopup from "./popups/TeamPopup";
export default {
  name: "Navbar",
  components: {
    NewBoardPopup,
    TeamPopup
  },
  props: ["buttonType", "currentBoard"],
  mounted() {
    console.log("buttonType ", this.buttonType);
  },
  data() {
    return {
      navBtnType: this.buttonType
    };
  },
  computed: {},
  methods: {
    addNewBoard(e) {
      e.preventDefault();
      Bus.$emit("open-new-popup", "board");
    },
    addNewList(e) {
      e.preventDefault();
      Bus.$emit("open-new-popup", "list");
    },
    openTeamPopoup(e) {
      e.preventDefault();
      Bus.$emit("open-team-popup", "list");
    }
  }
};
</script>

<style lang="scss" scoped>
.add-board-link {
  display: flex;
  align-items: center;
}
.navbar {
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 10000;
}
</style>
