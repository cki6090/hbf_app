import React from "react";
import { footerList } from "../data";
import { NavLink } from 'react-router-dom'

export default function () {
    return (
        <div className="footer">
            {footerList.map(data => (
                <NavLink to={data.page}>
                    <span key={data.id} className="material-symbols-outlined">
                        {data.menu}
                    </span>
                </NavLink>  
            ))}
        </div>
    );
}
