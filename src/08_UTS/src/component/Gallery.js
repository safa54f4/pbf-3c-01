import React, {Component} from "react";
import {fetchGallery} from "../action/gallery/galleryActions";
import {connect} from "react-redux";
import util from "../util";


class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            gallery: null,
            error: null
        };
    }

    componentDidMount() {
        this.props.fetchGallery()

    }

    render() {

    return (
        <div>
            <section className="container margin-bottom-50">
            <div className="row">
            {!this.props.gallery.loading ? (
                <div className="tm-gallery col-lg-12">
                {this.props.gallery.gallery.map((g)=>(
                    <div className="tm-item-container">
                        <img src={g.img}/>
                        <div className="tm-item-price-container tm-gallery-item-info">
                            <span className="tm-item-price">{g.title}</span>
                            <a href="#" className="tm-item-link">
                                <span className="tm-item-action">View More</span>
                                <img src="img/plus.png" className="tm-item-add-icon"/>
                            </a>
                        </div>
                    </div>
                ))}
                </div>
            ):(
                <div>Loading..</div>
            )}
            </div>
            {/*banner*/}
            <div className="tm-banner">
                <h2 className="tm-banner-title">Maecenas</h2>
                <p className="tm-banner-description">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium</p>
                <a href="#" className="tm-banner-link"><i className="fa fa-play" /></a>
            </div>
            </section>
        </div>

    )
}
}

const mapStateToProps = state => {
    return {
        gallery: state.gallery
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGallery: () => dispatch(fetchGallery())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery)
