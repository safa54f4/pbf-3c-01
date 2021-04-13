import React from "react";
const Header = (props) => {
    return (
        <div>
            <div id="loader-wrapper">
                <div id="loader" />
                <div className="loader-section section-left" />
                <div className="loader-section section-right" />
            </div>

            <section className="templatemo-top-section">
                <div className="templatemo-header">
                    <img className="templatemo-header-img" src="img/header.png" alt="Header" />
                    <h1 className="templatemo-site-name">Motor</h1>
                    <div className="mobile-menu-icon">
                        <i className="fa fa-bars" />
                    </div>
                    <div className="templatemo-nav-container">
                        <nav className="templatemo-nav">
                            <ul>
                                <li><a href="/" className="active">Home</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/gallery">Gallery</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="templatemo-welcome">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                                <img src="img/welcome-img.png" className="img-responsive welcome-img" alt="Welcome" />
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                <h2 className="text-uppercase">
                                    <span className="welcome-title-1">We love your</span>
                                    <span className="welcome-title-2">satisfaction</span>
                                </h2>
                                <p className="welcome-message">Motor is free Bootstrap v3.3.4 responsive web template provided
              by <span className="blue">template</span><span className="green">mo</span>.com website. You can download,
              modify and use this for your website projects.</p>
                                <a href="#" className="welcome-read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container margin-bottom-50">
                <div className="row">
                    <h2 className="col-lg-12 text-center text-uppercase margin-bottom-30">Donec pede justo fringilla ulputate eget</h2>
                    <p className="col-lg-12 text-center margin-bottom-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                    <div className="col-lg-12 tm-overflow-hidden">
                        <div className="tm-img-1-container">
                            <img src="img/0.jpg" alt="Image description" />
                            <p className="tm-img-1-description">Porsche</p>
                        </div>
                        <div className="tm-img-1-container">
                            <img src="img/1.jpg" alt="Image description" />
                            <p className="tm-img-1-description">Mercedes</p>
                        </div>
                        <div className="tm-img-1-container">
                            <img src="img/0.jpg" alt="Image description" />
                            <p className="tm-img-1-description">BMW</p>
                        </div>
                        <div className="tm-img-1-container">
                            <img src="img/1.jpg" alt="Image description" />
                            <p className="tm-img-1-description">Lexus</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Header;