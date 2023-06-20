import React from "react";
import Header from "../../components/index/header";
import Menu from "../../components/index/menu";
import Contant from "../../components/index/contant";
import Footer from "../../components/index/footer";

export default function mainPage() {
    return (
        <div className="App_index">

            <div className="Advertising">
                메인 이벤트 이미지
            </div>

            <div className="HBF_APP">
                <Header />
                <Menu />
                <Contant />
                <Footer />
            </div>

        </div>
    );
}
