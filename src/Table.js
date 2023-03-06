import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPost: [],       // Untuk tampung Get all data
            totalData: 0       // Untuk Hitung All Data          
        }
    }

    componentDidMount() {
        this.GetdataPosts()
    }

    GetdataPosts() {
        fetch("https://dummyjson.com/posts").then(res => {
            if (res.status === 200)
                return res.json()
            else
                return <p>No data Found</p>
        }).then(resdata => {
            console.log(resdata.posts)
            this.setState({
                dataPost: resdata.posts,
                totalData: resdata.posts.length
            })
        })
    }

    render() {
        return (
            <div className="col">
                <div className="container">
                    <div>Total data {this.state.totalData} record</div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>User ID</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.dataPost.map(dataPost => {
                                    return (<tr>
                                        <td>{dataPost.id}</td>
                                        <td>{dataPost.title}</td>
                                        <td>{dataPost.body}</td>
                                        <td>{dataPost.userId}</td>
                                        <td>
                                            <button className="btn btn-warning" onClick={() => this.props.update(dataPost)} >Edit</button>
                                            <button className="btn btn-danger" onClick={() => this.props.remove(dataPost.id)} >Delete</button>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Table;