import {Dashboard} from "../../containers/Dashboard";
import Posts from "../../containers/post/Posts";
import Post from "../../containers/post/Post";

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
        path: '/admin/posts/:id'
    }
};