import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
        <header>
        <div className="carousel" data-count={3} data-current={2}>
            {/* <button class="btn btn-control"></button> */}
            <div className="items">
            <div className="item" data-marker={1}>
                <img src="assets/img/carousel/bckg.jpg" alt="Background" className="background" />
                <div className="content">
                <div className="outside-content">
                    <div className="inside-content">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-12 align-center">
                            <h1>New amazing Kipas Portable</h1>
                            <p>Kipas angin mini ini adalah kipas angin yang memiliki ukuran lebih kecil dari kipas angin pada umumnya. Kipas angin ini memiliki banyak fungsi diantaranya, bisa dijadikan sebagai lampu senter dan bisa digunakan untuk charge hp.</p>
                            <a href="/product">More Kipas Angin &gt;</a>
                            <br /><br />
                        </div>
                        <div className="col-sm-6 col-sm-offset-3 align-center">
                            <img src="assets/img/carousel/kipasC1.png" alt="KIPAS" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="item active" data-marker={2}>
                <img src="assets/img/carousel/bckg.jpg" alt="Background" className="background" />
                <div className="content">
                <div className="outside-content">
                    <div className="inside-content">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 align-center">
                            <img src="assets/img/carousel/kipasC2.png" alt="Surface Pro" />
                        </div>
                        <div className="col-sm-12 align-center">
                            <h1>Kipas Angin Dinding</h1>
                            <p>Udara yang panas menyebabkan ruangan menjadi tidak nyaman dan kondusif, sehingga kipas angin dingin menjadi solusi. Dengan berbagai jenis kipas angin seperti kipas angin industrial, kipas angin uap, kipas angin meja, kipas angin gantung, atau exhaust fan tentu akan menjadi solusi ruangan yang nyaman dan kondusif.</p>
                            <a href="/product">View surfaces &gt;</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="item" data-marker={3}>
                <img src="assets/img/carousel/bckg.jpg" alt="Background" className="background" />
                <div className="content">
                <div className="outside-content">
                    <div className="inside-content">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-5 col-sm-offset-1 align-center">
                            <img src="assets/img/carousel/kipasC31.png" alt="iPad Air 2" className="hidden-xs hidden-sm" />
                            <img src="assets/img/carousel/kipasC31.png" alt="iPad Air 2" className="hidden-md hidden-lg" />
                        </div>
                        <div className="col-sm-4 align-left">
                            <br className="hidden-xs hidden-sm" /><br className="hidden-xs hidden-sm" /><br className="hidden-xs hidden-sm" />
                            <br className="hidden-xs hidden-sm" /><br className="hidden-xs hidden-sm" /><br className="hidden-xs hidden-sm" />
                            <h1>Kipas Angin Industrial</h1>
                            <br />
                            <p>
                            Kipas Angin Meja Industrial Grade memiliki desain yang ergonomis dan dapat ditempatkan pada lantai atau di atas meja. Kipas ini dapat menghasilkan angin yang lebih kencang, dengan tingkat kebisingan yang rendah.                            </p>
                            <a href="/product">View product &gt;</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </div>
            <ul className="markers">
            <li data-marker={1}><img src="assets/img/carousel/kipasC11.png" alt="Background" /></li>
            <li data-marker={2} className="active"><img src="assets/img/carousel/kipasC21.png" alt="Background" /></li>
            <li data-marker={3}><img src="assets/img/carousel/kipasC31.png" alt="Background" /></li>
            </ul>
        </div>
        </header>

        )
    }
}

export default Header