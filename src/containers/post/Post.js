import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.route.match.params.id,
            post: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/posts/' + this.state.id)
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        post: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                });
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"
                               placeholder="Post name"
                                value={this.state.post.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">Friend Url</label>
                        <input type="text" className="form-control" id="url"
                               placeholder="Post url"
                               value={this.state.post.url}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="summary">Summary</label>
                        <textarea className="form-control" id="summary"
                                  placeholder="Post summary"
                                  value={this.state.post.summary}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content"
                                  placeholder="Post content"
                                rows="10"
                                  value={this.state.post.content}>
                        </textarea>
                    </div>
                    <Link className="btn btn-default" to="/admin/posts">Back</Link>
                </form>
            </div>
        );
    }
}

export default Post;