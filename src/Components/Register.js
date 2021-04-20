import { Component } from "react";
import axios from "axios";
import '../assets/css/register.css';

class Register extends Component {
    state = {
        uimage: "",
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
    }
    sendUserData = (e) => {
        e.preventDefault()
        const data = new FormData()

        data.append('uimage', this.state.uimage)
        data.append('fname', this.state.fname)
        data.append('lname', this.state.lname)
        data.append('username', this.state.username)
        data.append('email', this.state.email)
        data.append('password', this.state.password)

        axios.post("http://localhost:90/user/register", data)
            .then((response)=>{
                console.log(response)
                window.location.href='/';
            })
            .catch(err => {
                console.log(err)
            })
    }

    imageHandler = (e) => {
        this.setState({
            uimage: e.target.files[0]
        })
    };

    render() {
        return (
            <div class="main-w3layouts wrapper">
                <h1>Sign Up to Physique planner</h1>
                <div class="main-agileinfo">
                    <div class="agileits-top">
                        <form>
                            <input type="file" placeholder="Upload Profile" name="uimage" onChange={this.imageHandler} /><br></br>

                            <input class="text f" type="text" name="fname" placeholder="First Name" value={this.state.fname}
                                onChange={(event) => { this.setState({ fname: event.target.value }) }} />

                            <input class="text l" type="text" name="lname" placeholder="Last Name" value={this.state.lname}
                                onChange={(event) => { this.setState({ lname: event.target.value }) }} />

                            <input class="text u" type="text" name="username" placeholder="Username" value={this.state.username}
                                onChange={(event) => { this.setState({ username: event.target.value }) }} />

                            <input class="text email" type="text" name="email" placeholder="Email" value={this.state.email}
                                onChange={(event) => { this.setState({ email: event.target.value }) }} />

                            <input class="text w3lpass" type="password" name="password" placeholder="Password" value={this.state.password}
                                onChange={(event) => { this.setState({ password: event.target.value }) }} />

                            <div class="wthree-text">
                                <label class="anim">
                                    <input type="checkbox" class="checkbox" required="" />
                                    <span>I Agree To The Terms & Conditions</span>
                                </label>
                                <div class="clear"> </div>
                            </div>
                            <input type="submit" value="SIGNUP" onClick={this.sendUserData} />
                        </form>
                        <p>Already have an account? <a href="/"> Login Now!</a></p>
                    </div>
                </div>
                <ul class="colorlib-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}
export default Register