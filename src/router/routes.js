import Dashboard from "./../components/Dashboard.vue"
import Taskboard from "./../components/Taskboard.vue"

export default [
  {
    path: "/",
    name: "home",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/boards/:id",
    name: "task-board",
    component: Taskboard
  }
]
