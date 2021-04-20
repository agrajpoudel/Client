import React, { Component } from "react";
import axios from 'axios';
import '../assets/css/register.css';

class Addproduct extends Component {
    state = {
        pname: '',
        pprice: '',
        pdesc: '',
        pimage: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }

    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fileHandler = (e) => {
        this.setState({
            pimage: e.target.files[0]
        })
    }
    Addpro = (e) => {
        e.preventDefault();
        const data = new FormData() // new line

        data.append('pimage', this.state.pimage)
        data.append('pname', this.state.pname)
        data.append('pprice', this.state.pprice)
        data.append('pdesc', this.state.pdesc)

        axios.post("http://localhost:90/product/add", data)
            .then((response) => {
                console.log(response)
                window.location.href='/product'
            })
            .catch((err) => {
                console.log(err.response)
            })

    }

    render() {
        return (
            <div class="main-w3layouts wrapper">
                <h1>Add New Product</h1>
                <div class="main-agileinfo">
                    <div class="agileits-top">
                        <form>
                            <input type="file" placeholder="Upload Profile" name="pimage" onChange={this.fileHandler} /><br></br>

                            <input class="text f" type="text" name="pname" placeholder="Product Name" value={this.state.pname}
                                onChange={(event) => { this.setState({ pname: event.target.value }) }} />

                            <input class="text l" type="text" name="pprice" placeholder="Product Price" value={this.state.pprice}
                                onChange={(event) => { this.setState({ pprice: event.target.value }) }} />

                            <input class="text u" type="text" name="pdesc" placeholder="Proudct Description" value={this.state.pdesc}
                                onChange={(event) => { this.setState({ pdesc: event.target.value }) }} />

                            <input type="submit" value="Add Product" onClick={this.Addpro} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Addproduct;