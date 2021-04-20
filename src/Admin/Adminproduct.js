import {Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import "../assets/css/show.css"

class Adminproduct extends Component {
    state={
        product:[] ,
        config: {
            Headers: {'authorization':`Bearer${localStorage.getItem('atoken')}`}
        }
    }

    componentDidMount(){
        axios.get("http://localhost:90/product/show")
            .then((res)=>{
                this.setState({
                    product: res.data.data
                })
            })
    }

    deleteProduct =(pid)=>{
        axios.delete('http://localhost:90/product/delete/'+pid, this.state.config)
        .then((response)=>{
            window.location.href='/adminproduct'
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }


    render(){
        return(
            <div class="maindiv">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Trending <b>Products</b></h2>
                            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                                <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="item carousel-item active">
                                        <div class="row">
                                            { this.state.product.map((mypro)=>{
                                                return(
                                                    <div class="col-sm-3">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src={"http://localhost:90/"+mypro.pimage} class="img-responsive img-fluid"/>
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h3 class="">{mypro.pname}</h3>
                                                            <p class="item-price"><strike>$400.00</strike> <span>{mypro.pprice}</span></p>
                                                            <div class="star-rating">
                                                            </div>
                                                            <button class="upbutton" ><Link to={"/updateproduct/"+mypro._id}>Update</Link></button>
                                                            &nbsp;
                                                            <button class="debutton" onClick={this.deleteProduct.bind(this,mypro._id)}>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Adminproduct