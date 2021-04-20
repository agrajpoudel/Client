import {Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import "../assets/css/show.css"

class Adminbodytype extends Component {
    state={
        bodytype:[] ,
        config: {
            Headers: {'authorization':`Bearer${localStorage.getItem('atoken')}`}
        }
    }

    componentDidMount(){
        axios.get("http://localhost:90/bodytype/show")
            .then((res)=>{
                this.setState({
                    bodytype: res.data.data
                })
            })
    }

    deletebodytype =(bid)=>{
        axios.delete('http://localhost:90/bodytype/delete/'+bid, this.state.config)
        .then((response)=>{
            window.location.href='/adminbodytype'
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
                                            { this.state.bodytype.map((mybtype)=>{
                                                return(
                                                    <div class="col-sm-3">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src={"http://localhost:90/"+mybtype.bimage} class="img-responsive img-fluid"/>
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h3 class="">{mybtype.bname}</h3>
                                                            <div class="star-rating">
                                                            </div>
                                                            <button class="upbutton" ><a href="#">Update</a></button>
                                                            &nbsp;
                                                            <button class="debutton"> <a href="#">Delete</a></button>
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
export default Adminbodytype