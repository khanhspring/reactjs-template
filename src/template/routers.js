import {Profile} from "../../containers/Dashboard";
import {Posts} from "../../containers/Posts";
import {Post} from "../../containers/Post";

export default {
    Profile: {
        component: Profile,
        path: '/profile'
    },
    Posts: {
        component: Posts,
        path: '/profile/posts'
    },
    Post:{
        component: Post,
        path: '/profile/posts/:idPost'
    }
};