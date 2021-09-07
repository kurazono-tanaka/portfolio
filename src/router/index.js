import Vue from "vue";
import Router from "vue-router";
import PortfolioTop from "@/components/PortfolioTop";
import Signup from "@/components/Signup";
import Signin from "@/components/Signin";
import Home from "@/components/Home";
import Register from "@/components/Register";
import Verification from "@/components/Verification";
import UpdateInformation from "@/components/UpdateInformation";
import Search from "@/components/Search";
import Result from "@/components/Result";
import Detail from "@/components/Detail";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "PortfolioTop",
      component: PortfolioTop
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { requiresAuth: true }
    },
    {
      path: "/verification",
      name: "Verification",
      component: Verification,
      meta: { requiresAuth: true }
    },
    {
      path: "/updateInformation",
      name: "UpdateInformation",
      component: UpdateInformation,
      meta: { requiresAuth: true }
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
      meta: { requiresAuth: true }
    },
    {
      path: "/result",
      name: "Result",
      component: Result,
      meta: { requiresAuth: true }
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("toの中身");
  console.log(to);
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  console.log("requiresAuthの中身");
  console.log(requiresAuth);
  if (requiresAuth) {
    // このルートはログインされているかどうか認証を行う。
    // もしされていないならば、ログインページにリダイレクトする。
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next();
        console.log("userあり");
      } else {
        console.log("userなし");
        next({
          path: "/signin",
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    next();
  }
});

export default router;
