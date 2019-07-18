<template>
  <div>
    <Navbar />
    <div class="container-fluid main-container">
      <div class="row">
        <div class="col-md-12">
          <div >
              <Taskboard class="board-wrapper" />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Taskboard from "./Taskboard";
import Navbar from "./Navbar";
export default {
  name: "Dashboard",
  components: {
    Taskboard,
    Navbar
  }
};
</script>

<style>
</style>
