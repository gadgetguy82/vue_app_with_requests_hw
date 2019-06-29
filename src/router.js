import Vue from "vue";
import Router from "vue-router";
import Films from "@/views/Films";
import People from "@/views/People";
import Locations from "@/views/Locations";
import Species from "@/views/Species";
import Vehicles from "@/views/Vehicles";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/films",
      name: "films",
      component: Films
    },
    {
      path: "/people",
      name: "people",
      component: People
    },
    {
      path: "/locations",
      name: "locations",
      component: Locations,
    },
    {
      path: "/species",
      name: "species",
      component: Species
    },
    {
      path: "/vehicles",
      name: "vehicles",
      component: Vehicles
    }
  ]
});

export default router;
