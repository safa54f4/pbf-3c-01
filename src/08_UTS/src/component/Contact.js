import React from "react";
const Contact = (props) => {
    return (
        <div>
            <section className="container tm-contact-main">
            
            <div className="row">
                <div className="contact-form-container">
                    <h2 className="contact-title">Contact Us</h2>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Drbi accumsan ipsum velit.</p>
                    <form action="#" method="post" className="tm-contact-form">
                        <div className="col-lg-5 col-md-5 contact-form-left">
                            <div className="form-group">
                                <input type="text" id="contact_name" className="form-control" placeholder="NAME" />
                            </div>
                            <div className="form-group">
                                <input type="email" id="contact_email" className="form-control" placeholder="EMAIL" />
                            </div>
                            <div className="form-group">
                                <input type="text" id="contact_subject" className="form-control" placeholder="SUBJECT" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 contact-form-right">
                            <div className="form-group margin-bottom-0">
                                <textarea id="contact_message" className="form-control" rows={6} placeholder="MESSAGE" defaultValue={""} />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 submit-btn-container">
                            <button type="submit" name="submit" className="btn text-uppercase templatemo-submit-btn">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            {/*banner*/}
            <div className="row">
                <div className="tm-banner">
                    <h2 className="tm-banner-title">Maecenas</h2>
                    <p className="tm-banner-description">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium</p>
                    <a href="#" className="tm-banner-link"><i className="fa fa-play" /></a>
                </div>
            </div>
            </section>
        </div>

    )
}
export default Contact;