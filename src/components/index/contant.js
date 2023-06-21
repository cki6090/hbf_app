import React from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Header from "../../components/index/header";
import Menu from "../../components/index/menu";

import Menu1 from '../../components/pages/menu1.js'
import Menu2 from '../../components/pages/menu2.js'
import Menu3 from '../../components/pages/menu3.js'
import Menu4 from '../../components/pages/menu4.js'

import Home from '../../components/pages/home.js'
import Search from '../../components/pages/search.js'
import Event from '../../components/pages/event.js'
import My from '../../components/pages/my.js'

export default function () {

    const Layout = () => {
        return(
           <>
                <Header />
                <Menu />
                <Outlet/>
           </>
        )
    }

    return (
        <>
            <div className="contant">
                <Routes>
                   
                    <Route path="/Search" element={<Search />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/my" element={<My />} />

                    <Route path="/" element={<Layout />}>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/menu1" element={<Menu1 />} />
                        <Route path="/menu2" element={<Menu2 />} />
                        <Route path="/menu3" element={<Menu3 />} />
                        <Route path="/menu4" element={<Menu4 />} />
                    </Route>
                    
                </Routes>
            </div>
        </>
        
    );
}


