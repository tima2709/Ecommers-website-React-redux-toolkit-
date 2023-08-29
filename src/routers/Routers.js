import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'home'}/>}/>
            <Route path={'home'} element={<Home/>}/>
            <Route path={'shop'} element={<Shop/>}/>
            <Route path={'shop/:id'} element={<ProductDetails/>}/>
            <Route path={'cart'} element={<Cart/>}/>
            <Route path={'checkout'} element={<Checkout/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={'singup'} element={<SignUp/>}/>
        </Routes>
    );
};

export default Routers;