import keepApp from './apps/keep/pages/note-index.cmp.js'
import homePage from './pages/home-page.cmp.js'
import mailApp from './apps/mail/pages/mail-index.cmp.js'
import mailDetails from './apps/mail/pages/mail-details.cmp.js'

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
    {
        path: '/mail/:mailId',
        component: mailDetails,
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory(),
})
