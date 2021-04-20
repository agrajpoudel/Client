import React, { Component } from 'react';
import '../assets/css/header.css';

class Header extends Component {
    render() {
        if (localStorage.getItem('token') && localStorage.getItem('userType') === 'admin') {
            var menu =
                <>
                    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
                        <div class="container d-flex align-items-center justify-content-between">
                            <div class="logo">
                                <h1><a href="index.html">Physique Planner</a></h1>
                            </div>
                            <nav id="navbar" class="navbar">
                                <ul>
                                    <li><a class="nav-link scrollto " href="">Home</a></li>
                                    <li class="dropdown"><a href=""><span>Product</span> <i class="bi bi-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="/adminproduct">Prodcuts</a></li>
                                            <li><a href="/addpro">Add Product</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href=""><span>Bodytype</span> <i class="bi bi-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="/addbodytype">Bodytype</a></li>
                                            <li><a href="/addpro">Add Bodytype</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="nav-link scrollto " href="">Logout</a></li>
                                </ul>
                                <i class="bi bi-list mobile-nav-toggle"></i>
                            </nav>
                        </div>
                    </header>

                </>
        }

        else if (localStorage.getItem('token') && localStorage.getItem('userType') === 'user') {
            menu =
                <>
                    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
                        <div class="container d-flex align-items-center justify-content-between">
                            <div class="logo">
                                <h1><a href="index.html">Physique Planner</a></h1>
                            </div>
                            <nav id="navbar" class="navbar">
                                <ul>
                                    <li><a class="nav-link scrollto " href="/home">Home</a></li>
                                    <li><a class="nav-link scrollto " href="product">Product</a></li>
                                    <li><a class="nav-link scrollto " href="/">Logout</a></li>
                                </ul>
                                <i class="bi bi-list mobile-nav-toggle"></i>
                            </nav>
                        </div>
                    </header>
                </>

        }
        else
            menu =
                <>
                    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
                        <div class="container d-flex align-items-center justify-content-between">
                            <div class="logo">
                                <h1><a href="index.html">Physique Planner</a></h1>
                            </div>
                            <nav id="navbar" class="navbar">
                                <ul>
                                    <li><a class="nav-link scrollto " href="/">Login</a></li>
                                    <li><a class="nav-link scrollto " href="/register">Register</a></li>
                                </ul>
                                <i class="bi bi-list mobile-nav-toggle"></i>
                            </nav>
                        </div>
                    </header>
                </>
        return (
            <div>
                {menu}
            </div>
        )

    }
}
export default Header
