import { Component } from "react";
import axios from 'axios';
import '../assets/css/login.css';

class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    sendUserData = (e) => {
        e.preventDefault()
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post("http://localhost:90/user/login", data)

            .then(response => {
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('userType','user')
                localStorage.setItem('uId',response.data.data._id)
                window.location.href="/home"

            })
            .catch(err => {
                alert("Invalid Credentials")


            })
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <form onsubmit="event.preventDefault()" class="box">
                                <h1>Login</h1>
                                <p class="text-muted"> Please enter your login and password!</p>
                                <input type="text" value={this.state.username}
                                onChange={(event) => { this.setState({ username: event.target.value }) }} placeholder="Username" />
                                <input type="password" value={this.state.password}
                                    onChange={(event) => { this.setState({ password: event.target.value }) }} placeholder="Password" />
                                <input type="submit"  value="Login" onClick={this.sendUserData} />
                                <p>Don't have an account? <a href="/register">Sign Up Here</a></p>
                                <div class="col-md-12">
                                    <ul class="social-network social-circle">
                                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#" class="icoGoogle" title="Google +"><i class="fab fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login