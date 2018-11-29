import React, {Component} from 'react';

class BlogList extends Component {

    render() {
        return (
            <div className="container page-container mt-5">
                <div className="blog-page">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src="/images/blog-1.jpeg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="/images/blog-2.jpeg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                    additional content.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="/images/blog-3.jpeg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This card has even longer content than the first to show
                                    that equal height action.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-deck mt-5">
                        <div className="card">
                            <img className="card-img-top" src="/images/blog-4.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="/images/blog-5.jpeg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                    additional content.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="/images/blog-6.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This card has even longer content than the first to show
                                    that equal height action.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogList;