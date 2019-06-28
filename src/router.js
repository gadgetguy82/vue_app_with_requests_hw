import Vue from "vue";
import Router from "vue-router";
import Films from "@/views/Films";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/films",
      name: "films",
      component: Films
    }
  ]
});

export default router;
