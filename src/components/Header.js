import React from 'react';
import {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              Header Text
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

