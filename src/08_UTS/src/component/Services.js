import React, { Component } from "react";
import { fetchServices } from "../action/services/serviceActions";
import { connect } from "react-redux";
import util from "../util";


class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            services: null,
            error: null
        };
    }

    componentDidMount() {
        this.props.fetchServices()
    }
    render() {
    return(
    <div>

    <section className="container margin-bottom-50">
        <div className="services-container-1">
            <h2 className="services-title">Customer Services</h2>
            {!this.props.services.loading ? (
                <div className="services-blocks-container">
                    {this.props.services.services.map((service) => (
                        <div className="services-block" key={service.id}>
                            <div className="services-header">
                                <i className="fa fa-plus services-icon" />
                                <h3 className="services-title-2">{service.title}</h3>
                            </div>
                            <p className="services-description">{service.content}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading..</div>
            )}
        </div>
        <div className="about-container-2">
            <div className="services-container-inner">
                <h3 className="about-title-2">aenean solcudin</h3>
                <img src="img/services-1.jpg" alt="Image" className="img-responsive margin-bottom-15" />
                <p className="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <a href="#" className="about-link about-link-2">Details</a>
            </div>
            <div className="services-container-inner">
                <h3 className="about-title-2">aenean solcudin</h3>
                <img src="img/services-1.jpg" alt="Image" className="img-responsive margin-bottom-15" />
                <p className="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <a href="#" className="about-link about-link-2">Details</a>
            </div>
            <div className="services-container-inner">
                <h3 className="about-title-2">morbi accumsan</h3>
                <img src="img/services-1.jpg" alt="Image" className="img-responsive margin-bottom-15" />
                <p className="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <a href="#" className="about-link about-link-2">Details</a>
            </div>
        </div>
        <div className="tm-banner">
            <h2 className="tm-banner-title">Maecenas</h2>
            <p className="tm-banner-description">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium</p>
            <a href="#" className="tm-banner-link"><i className="fa fa-play" /></a>
        </div>
    </section>
        </div >
    );
    
}}
const mapStateToProps = state => {
    return {
        services: state.services
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchServices: () => dispatch(fetchServices())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Services)
