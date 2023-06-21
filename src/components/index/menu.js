import React from "react";
import { menuList } from "../data";
import { NavLink } from 'react-router-dom'

export default function () {
    return (
        <div className="menu">
            {menuList.map(data => (
                <NavLink to={data.page}>
                <div key={data.id}>{data.menu}</div>
                </NavLink>
            ))}
        </div>
    );
}
