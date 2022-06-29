import keepApp from './apps/keep/pages/note-index.cmp.js'
import homePage from './pages/home-page.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import mailApp from './apps/mail/pages/mail-app.cmp.js'

const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/keep',
        component: keepApp,
    },
    {
        path: '/mail',
        component: mailApp,
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory(),
})
