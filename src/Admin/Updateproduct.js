import axios from "axios";
import React,{ Component } from "react";
import '../assets/css/register.css';

class Updateproduct extends Component{
    state = {
        pname : "",
        pimage:" ",
        pprice : "",
        pdesc : "",
        id : this.props.match.params.id
    }

    componentDidMount(){
        alert(this.state.id)
        axios.get("http://localhost:90/product/getone/" + this.state.id)
            .then((response)=>{
                this.setState({
                    pname : response.data.data.pname,
                    pprice : response.data.data.pprice,
                    pdesc : response.data.data.pdesc
                })
            })
            .catch((err)=>{
                console.log(err.response)
        })
    }

    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    updatePro = (e)=>{
        e.preventDefault()
        axios.put("http://localhost:90/product/update", this.state)
        .then((response) => {
            window.location.href='/adminproduct'
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div class="main-w3layouts wrapper">
                <h1>Add New Product</h1>
                <div class="main-agileinfo">
                    <div class="agileits-top">
                        <form>
                            <input type="file" placeholder="Upload Profile" name="pimage" onChange={this.imageHandler} /><br></br>

                            <input class="text f" type="text" name="pname" placeholder="Product Name" value={this.state.pname}
                                onChange={this.changeHandler} />

                            <input class="text l" type="text" name="pname" placeholder="Product Price" value={this.state.pprice}
                                onChange={this.changeHandler} />

                            <input class="text u" type="text" name="pdesc" placeholder="Proudct Description" value={this.state.pdesc}
                                onChange={this.changeHandler} />

                            <input type="submit" value="Update" onClick={this.updatePro} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Updateproduct