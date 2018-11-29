import {Contact} from "../../containers/Contact";
import BlogList from "../../containers/blog/BlogList";
import Home from "../../containers/Home";

export default {
    Home: {
        component: Home,
        path: '/'
    },
    Contact: {
        component: Contact,
        path: '/contact'
    },
    BlogList: {
        component: BlogList,
        path: '/blog'
    }
};