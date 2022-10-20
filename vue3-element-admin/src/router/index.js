import { createRenderer,createWebHashHistory } from "vue-router";
import home from './modules/home'
import login from "./modules/login";

const router =createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:"/home"
        },
        ...home,
        ...login
    ],
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition
        }else{
            return {left:0,top:0}
        }
    }
})
export default router