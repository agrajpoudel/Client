import { Component } from "react";
import axios from 'axios';
import '../assets/css/adminlogin.css'

class Admin extends Component {
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
        axios.post("http://localhost:90/admin/login", data)

            .then(response => {
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('userType','admin')
                window.location.href="/adminpannel"

            })
            .catch(err => {
                alert("Invalid Credentials")


            })
    }
    render() {
        return (

            <div class="container h-80">
                <div class="row align-items-center h-100">
                    <div class="col-3 mx-auto">
                        <div class="text-center">
                            <img id="profile-img" class="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" />
                            <p id="profile-name" class="profile-name-card"></p>
                            <form class="form-signin">
                                <input type="text" name="username" id="inpuusername" class="form-control form-group" placeholder="Username" 
                                value={this.state.username} onChange={(event) => { this.setState({ username: event.target.value }) }}  required autofocus />
                                <input type="password" name="password" id="inputPassword" class="form-control form-group" placeholder="password" 
                                value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} required autofocus />
                                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit"  onClick={this.sendUserData}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin