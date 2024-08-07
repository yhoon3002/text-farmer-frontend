import BoardListPage from "@/board/pages/list/BoardListPage.vue"
import BoardRegisterPage from "@/board/pages/register/BoardRegisterPage.vue"
import BoardReadPage from "@/board/pages/read/BoardReadPage.vue"
import BoardModifyPage from "@/board/pages/modify/BoardModifyPage.vue"

const BoardRoutes = [
    {
        path: '/board/list',
        name: 'BoardListPage',
        component: BoardListPage,
    },
    {
        path: '/board/register',
        name: 'BoardRegisterPage',
        component: BoardRegisterPage,
    },
]

export default BoardRoutes