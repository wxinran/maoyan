export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'showingup',
            component : () => import('@/components/ShowingUp')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path: '/movie',
            redirect: '/movie/showingup'
        }
    ]
}