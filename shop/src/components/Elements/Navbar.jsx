import React from 'react';
import img from '../../assets/header-img.jpg'
import '../../App.css'

const Header = () => {
    return (
        <div className="App">
            <header>
                <nav>
                    <ul className="navbar">
                        <li><a href="#home">خانه</a></li>
                        <li><a href="#products">محصولات</a></li>
                        <li><a href="#about-us">درباره ما</a></li>
                        <li><a href="#contact">ارتباط با ما</a></li>
                    </ul>
                    <div className="logo">
                        <h1>onsko</h1>
                    </div>
                </nav>
            </header>

            <main>
                <div className="hero-section">
                    <img src={img} alt="Hero" className="hero-image" />
                    <div className="hero-text">
                        <h2>لباس‌پوشی</h2>
                        <p>زیبایی خود را با ما به دست بیاورید</p>
                        <button className="shop-button">خرید</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Header;
