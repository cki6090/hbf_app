import React from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Header from "../../components/index/header";
import Menu from "../../components/index/menu";

import First_purchase from '../../components/pages/first_purchase.js'
import Real_time_sale from '../../components/pages/real_time_sale.js'
import Best_product from '../../components/pages/best_product.js'
import Set_product from '../../components/pages/set_product.js'

import Home from '../../components/pages/home.js'
import Search from '../../components/pages/search.js'
import Event from '../../components/pages/event.js'
import My from '../../components/pages/my.js'

export default function () {

    const Layout = () => {
        return (
            <>
                <Header />
                <Menu />
                <Outlet />
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
                        <Route path="/first_purchase" element={<First_purchase />} />
                        <Route path="/real_time_sale" element={<Real_time_sale />} />
                        <Route path="/best_product" element={<Best_product />} />
                        <Route path="/set_product" element={<Set_product />} />
                    </Route>

                </Routes>

            </div>
        </>

    );
}


