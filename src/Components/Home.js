import { Component } from "react";
import axios from "axios";
import '../assets/css/show.css'

class Home extends Component {
    state = {
        bodytype: [],
        config: {
            Headers: { 'authorization': `Bearer${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {
        axios.get("http://localhost:90/bodytype/show")
            .then((res) => {
                this.setState({
                    bodytype: res.data.data
                })
            })
    }

    render() {
        return (
            <div class="maindiv">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Best <b>Exercises</b></h2>
                            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                                <div class="carousel-inner">
                                    <div class="item carousel-item active">
                                        <div class="row">
                                            { this.state.bodytype.map((mybtype)=>{
                                                return(
                                                    <div class="col-sm-3">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src= {"http://localhost:90/" + mybtype.bimage} class="img-responsive img-fluid" />
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h4 class="textee">{mybtype.bname}</h4>
                                                            <div class="star-rating">
                                                            </div>
                                                            <button class="stbutton">Start Exercise</button>
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
export default Home