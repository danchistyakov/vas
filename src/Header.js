import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Solutions from './Solutions';
import Contact from './Contact';
export default class Header extends Component {
    render() {
        return (
        <Router>
            <header>
          <div className="header_logo"><a href="/"><h1>VAS</h1></a></div>
          <div className="header_desktop_nav"><a href="/">Главная</a><a href="/about">О нас</a><a href="/solutions">Решения</a><a href="/contact">Контакты</a></div>
            <div className="header_mobile_nav">
              <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
                <label htmlFor="menu-icon"></label><nav className="nav"><ul className="pt-5">
                  <li><a className="ul_mobile" href="/">Главная</a></li>
                  <li><a className="ul_mobile" href="/about">О нас</a></li><li><a className="ul_mobile" href="/solutions">Решения</a></li><li><a className="ul_mobile" href="/contact">Контакты</a></li></ul></nav></div>
                  </header>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/solutions' component={Solutions} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
            </Router>
        )
    }
}
