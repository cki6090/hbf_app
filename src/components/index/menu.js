import React from "react";
import { menuList } from "../data";

export default function () {
    return (
        <div className="menu">
            {menuList.map(data => (
                <div key={data.id}>{data.menu}</div>
            ))}
        </div>
    );
}
