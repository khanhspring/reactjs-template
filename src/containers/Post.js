import React from 'react';
import { Link } from 'react-router-dom';

export const Post = (routes) => {
    const idPost = routes.route.match.params.idPost;
    return (<div> Post {idPost}</div>);
}