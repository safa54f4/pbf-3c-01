import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return(
        <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="./"> <i className="ion-cube" /> VeFan</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/product">Products</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/about">About</a></li>
               
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="/login"> <i className="ion-android-person" /> Login </a></li>
            </ul>
            </div>{/*/.nav-collapse */}
        </div>{/*/.container-fluid */}
        </nav>
        )
    }
}

export default Navbar