/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home';
import UserCrud from "../components/user/useCrud";

export default props => 
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users' element={<UserCrud />} />
        <Route from='*' element={<Home />}/>
    </Routes>