import Index from "@/pages/Immersive.vue";
import BrokenHeart from "@/pages/Broken-Heart.vue";
import SpaceWalker from "@/pages/Space-Walker.vue";

export default [
    {
        path: '/',
        component: Index,
        name: "index"
    },
    {
        path: '/immersive',
        component: Index,
        name: "immersive"
    },
    {
        path: '/broken-heart',
        component: BrokenHeart,
        name: "broken-heart"
    },
    {
        path: '/space-walker',
        component: SpaceWalker,
        name: "space-walker"
    },
]