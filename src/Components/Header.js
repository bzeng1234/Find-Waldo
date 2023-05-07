import React from "react";
import '../Styles/header.css'

function Header() {
    return (
        <header className="header-container">
            <nav className="nav-container">
                <div className="title-container">
                    <h1 className="title-one">Find</h1>
                    <h1 className="title-two">Waldo!</h1>
                </div>
            </nav>
        </header>
    );
}

export default Header;