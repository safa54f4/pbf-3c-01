import React from 'react'
import { Provider } from 'react-redux'
import './App.css';
import store from './store'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'
import Services from './component/Services'
import Gallery from './component/Gallery'
import Home from './component/Home'
import Products from './component/Products'
import Contact from './component/Contact'


function App() {
  return (
    <BrowserRouter>
        <Provider store={store}>
            <div >
              <Header/>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/services" component={Services}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/contact" component={Contact}/>
                  </Switch>
              <Footer/>
            </div>
            </Provider>
       </BrowserRouter>
  );
}

export default App;
