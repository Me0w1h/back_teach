import Vue from 'vue';
import VueRouter from 'vue-router';



Vue.use(VueRouter)      

const routes=[
    {
    path: '/',
    name: 'Main',
    component: ()=>import('../views/Main.vue'),
    redirect:'/home',
    children:[
        {
            path:'/home',
            name:'home',
            meta: { title: "首页" },
            component:()=>import('../views/home')
        },
        {
            path:'/user',
            name:'user',
            meta: { title: "用户管理" },
            component:()=>import('../views/User')
        },
        {
            path:'/exam',
            name:'exam',
            meta: { title: "考试管理" },
            component:()=>import('../views/exam')
        },
        {
            path:'/page1',
            name:'page1',
            meta: { title: "待建设" },
            component:()=>import('../views/other/pageOne')
        },
        {
            path:'/page2',
            name:'page2',
            meta: { title: "待建设" },
            component:()=>import('../views/other/pageTwo')
        }
    ]
    },
    {
        path: '/',
        name: 'login',
        component: ()=>import('../views/login.vue'),
        redirect:'/login',
        children:[
            {
                path:'/login',
                name:'login',
                meta: { title: "登录" },
                component:()=>import('../views/login')
            }
        ]
        }
   
]

const router = new VueRouter({
    mode:'hash',
    routes
})

export default router