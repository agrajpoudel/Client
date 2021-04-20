import { Component } from "react";
import axios from "axios";
import '../assets/css/show.css'

class Product extends Component {
    state = {
        product: [],
        config: {
            Headers: { 'authorization': `Bearer${localStorage.getItem('ptoken')}` }
        }
    }

    componentDidMount() {
        axios.get("http://localhost:90/product/show")
            .then((res) => {
                this.setState({
                    product: res.data.data
                })
            })
    }

    render() {
        return (
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
                                                            <img src= {"http://localhost:90/" + mypro.pimage} class="img-responsive img-fluid" />
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h4>{mypro.pname}</h4>
                                                            <p class="item-price"><strike>$400.00</strike> <span>{mypro.price}</span></p>
                                                            <div class="star-rating">
                                                            </div>
                                                            <button class="pbutton">Add to Cart</button>
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
export default Product