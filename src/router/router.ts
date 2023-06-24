import { createRouter, createWebHashHistory} from "vue-router";
import Index from "../pages/index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/UserPage.vue";
import NotFound from "../pages/NotFound.vue";
import Search from "../pages/search.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import uerLoginPage from "../pages/userLoginPage.vue"
const routes = [
    {
        path:"/",
        name:"index",
        component:Index
    }
    ,
    {
        path: "/team",
        name:"team",
        component: Team
    },
    {
        path: "/user",
        name: "user",
        component: User
    },
    { path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: "/search",
        name: "search",
        component: Search
    },
    {
        path: "/user/edit",
        name: "edit",
        component: UserEditPage
    },
    {
        path: "/user/list",
        component: SearchResultPage
    },
    {
        path: "/user/login",
        component: uerLoginPage
    }

]
const router  = createRouter(
    {
        history:createWebHashHistory(),
        routes,
    }
)
// 需要导出才能在main.ts 使用
export default router