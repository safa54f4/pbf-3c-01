import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
        <footer>
        <div className="about">
            <div className="container">
            <div className="row">
                <hr className="offset-md" />
                <div className="col-xs-6 col-sm-3">
                <div className="item">
                    <i className="ion-ios-telephone-outline" />
                    <h1>24/7 free <br /> <span>support</span></h1>
                </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                <div className="item">
                    <i className="ion-ios-star-outline" />
                    <h1>Low price <br /> <span>guarantee</span></h1>
                </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                <div className="item">
                    <i className="ion-ios-gear-outline" />
                    <h1> Manufacturer’s <br /> <span>warranty</span></h1>
                </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                <div className="item">
                    <i className="ion-ios-loop" />
                    <h1> Full refund <br /> <span>guarantee</span> </h1>
                </div>
                </div>
                <hr className="offset-md" />
            </div>
            </div>
        </div>
        <div className="subscribe">
            <div className="container align-center">
            <hr className="offset-md" />
            <h1 className="h3 upp">Join our newsletter</h1>
            <p>Get more information and receive special discounts for our products.</p>
            <hr className="offset-sm" />
            <form action="index.php" method="post">
                <div className="input-group">
                <input type="email" name="email" defaultValue placeholder="E-mail" required className="form-control" />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary"> Subscribe <i className="ion-android-send" /> </button>
                </span>
                </div>{/* /input-group */}
            </form>
            <hr className="offset-lg" />
            <hr className="offset-md" />
            <div className="social">
                <a href="#"><i className="ion-social-facebook" /></a>
                <a href="#"><i className="ion-social-twitter" /></a>
                <a href="#"><i className="ion-social-googleplus-outline" /></a>
                <a href="#"><i className="ion-social-instagram-outline" /></a>
                <a href="#"><i className="ion-social-linkedin-outline" /></a>
                <a href="#"><i className="ion-social-youtube-outline" /></a>
            </div>
            <hr className="offset-md" />
            <hr className="offset-md" />
            </div>
        </div>
        </footer>

        )
    }
}
export default Footer