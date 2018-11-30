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
        this.deleteHandle = deleteHandle()
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

    deleteHandle() {
        if (window.confirm("Are you sure?")) {
            console.log(123);
        }
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
                        <th scope="col" width="150">Created At</th>
                        <th scope="col" width="170">##</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.items.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td><Link to={'/admin/posts/' + item.id}>{item.name}</Link></td>
                                <td>{item.url}</td>
                                <td>{new Date(item.createdAt).toDateString()}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-danger btn-sm mr-1">Delete</button>
                                    <button type="button" className="btn btn-outline-info btn-sm">Update</button>
                                </td>
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
