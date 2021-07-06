import Vue from "vue";
import VueRouter from "vue-router";
import NavBar from "../components/NavBar.vue";
import Home from "../components/Home.vue";
import Setting from "../components/Setting.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";

Vue.use(VueRouter);

const routes = [
   {
      name: "NavBar",
      path: "/navbar",
      component: NavBar,
      alias: ["/"]
   },
   {
      name: "Home",
      path: "/home",
      component: Home,
   },
   {
      name: "Setting",
      path: "/setting",
      component: Setting,
   },
   {
      name: "About",
      path: "/about",
      component: About,
   },
   {
      name: "Contact",
      path: "/contact",
      component: Contact,
   }
];

const router = new VueRouter({
   mode: "history",
   routes
});
export default router;