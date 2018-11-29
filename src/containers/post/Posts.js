import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/posts')
            .then(res => res.json())
            .then((result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    }

    render() {
        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Url</th>
                        <th scope="col">Created At</th>
                        <th scope="col">##</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.items.map(item => (
                            <tr key={item.id}>
                                <th scope="row">1</th>
                                <td><Link to={'/admin/posts/' + item.id}>{item.name}</Link></td>
                                <td>{item.url}</td>
                                <td>{item.createdAt}</td>
                                <td>##</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Posts;
