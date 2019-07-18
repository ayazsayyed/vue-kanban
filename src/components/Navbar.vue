<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-primary-custom">
        <div class="container-fluid">
            <input type="text" class="form-control search-task" placeholder="Search for tasks..">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary"
                aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-primary">
                <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Discover <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Settings</a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
</template>

<script>
export default {
    name:'Navbar'
}
</script>

<style>

</style>
