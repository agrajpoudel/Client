import { Component } from "react";
import Register from './Register';
import Login from './Login';
import Home from './Home'
import Product from './Product';

import Admin from '../Admin/Admin'
import Adminpannel from '../Admin/Adminpannel'
import Adminproduct from '../Admin/Adminproduct'
import Addproduct from '../Admin/ProductAdd'
import Updateproduct from '../Admin/Updateproduct';

import Addbodytype from '../Admin/BodytypeAdd'
import Adminbodytype from '../Admin/Adminbodytype'
import Updatebodytype from '../Admin/Updateproduct';

import { Route } from 'react-router-dom';

class Container extends Component {
    render() {
        return (
            <div>

                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/product" component={Product} />

                <Route path="/admin" component={Admin} />
                <Route path="/adminpannel" component={Adminpannel}/> 

                <Route path="/adminproduct" component={Adminproduct} />
                <Route path="/addpro" component={Addproduct} />
                <Route path="/updateproduct/:id" component={Updateproduct}/>

                <Route path="/addbodytype" component={Addbodytype} />
                <Route path="/adminbodytype" component={Adminbodytype} />
                <Route path="/updatebodytype/" component={Updatebodytype}/>


            </div>
        )
    }
}
export default Container