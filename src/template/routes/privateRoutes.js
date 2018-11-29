import {Dashboard} from "../../containers/Dashboard";
import {Posts} from "../../containers/Posts";
import {Post} from "../../containers/Post";

export default {
    Profile: {
        component: Dashboard,
        path: '/admin'
    },
    Posts: {
        component: Posts,
        path: '/admin/posts'
    },
    Post:{
        component: Post,
        path: '/admin/posts/:idPost'
    }
};