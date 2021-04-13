import React, { Component } from "react";
import { fetchProducts } from "../action/products/productActions";
import { connect } from "react-redux";
import util from "../util";


class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            products: null,
            productslist : null,
            error: null
        };
    }

    componentDidMount() {
        this.props.fetchProducts()

    }

    render() {

        return (
            <div>
                <section className="container margin-bottom-50">
                    <div className="tm-overflow-hidden row">
                        {!this.props.products.loading ? (
                            <div className="tm-gallery col-lg-9 col-md-9 col-sm-8 col-xs-12">
                                <h3 className="tm-gallery-title">Toyota (53)</h3>
                                {this.props.products.products.map((product) => (
                                    <div className="tm-item-container" key={product.id}>
                                        <img src={product.image} alt={product.image} />
                                        <p className="tm-item-description">{product.content}</p><hr />
                                        <div className="tm-item-price-container">
                                            <span className="tm-item-price">Rp. {product.price}</span>
                                            <a href="#" className="tm-item-link">
                                                <span className="tm-item-action">Add to Cart</span>
                                                <img src="img/plus.png" className="tm-item-add-icon" alt="Image" />
                                            </a>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        ) : (
                            <div>Loading...</div>
                        )}
                        <aside className="tm-gallery-aside col-lg-3 col-md-3 col-sm-4 col-xs-12">
                            <nav className="tm-gallery-nav">
                                <h2 className="tm-gallery-nav-title">Category <i className="fa fa-caret-up" /></h2>
                                <ul>
                                    <li className="active">
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Toyota
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Honda
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Nissan
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />BMW
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Audi
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Mercedes
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Lexus
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Ford
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Ferrari
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Lamborghini
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Porsche
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Land Rover
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />Chevrolet
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/gallery-list-icon.png" className="tm-gallery-list-img" alt="Image" />More...
          <i className="fa fa-caret-right tm-gallery-list-fa" />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="tm-call-us">
                                <h3 className="text-uppercase tm-call-us-title">Call us</h3>
                                <a href="tel:" className="tm-call-us-link">+11 565 789 57</a>
                            </div>
                        </aside>

                    </div>
                    <div className="tm-banner">
                        <h2 className="tm-banner-title">Maecenas</h2>
                        <p className="tm-banner-description">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium</p>
                        <a href="#" className="tm-banner-link"><i className="fa fa-play" /></a>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
