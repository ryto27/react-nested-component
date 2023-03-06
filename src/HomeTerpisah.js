import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TableTerpisah from './TableTerpisah';

class HomeTerpisah extends Component {
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
                                    return <TableTerpisah key={dataPost.id}
                                        data={dataPost} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default HomeTerpisah;