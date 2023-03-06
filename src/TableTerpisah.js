import React, { Component } from 'react';

class TableTerpisah extends Component {

    render() {
        const posts = this.props.data;
        return (
            <tr>
                <td>{posts.id}</td>
                <td>{posts.title}</td>
                <td>{posts.body}</td>
                <td>{posts.userId}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.update(posts)} >Edit</button>
                    <button className="btn btn-danger" onClick={() => this.props.remove(posts.id)} >Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableTerpisah;