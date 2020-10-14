import React from 'react';
import Button from '../button/Button.js';
import './Header.css';

import Logo from '../../img/logo.png';

import { Link } from 'react-router-dom';

class Header extends React.Component {
    state = {
    }
    teste = () => {
        console.log("teste");
    }
    render() {
        return (
            <div className="Header">
                <div className="Header-container">
                    <div className="Header-logo">
                        <Link to="/">
                            <img id="logo" src={Logo} />
                        </Link>
                    </div>
                    <div className="Header-menu">
                        <Link to="/admin" style={{marginRight: '20px', textDecoration: 'none'}}>PAINEL ADMIN</Link>
                        <a onClick={this.teste} className="Header-link-evento">ORGANIZE SEU EVENTO</a>
                        <a className="Header-link-acesso">ACESSE SUA CONTA</a><Button text="CADASTRE-SE" />
                    </div>
                </div>
                    <input type="checkbox" id="Header-menu-mobile-checkbox"/>
                    <label for="Header-menu-mobile-checkbox" className="Header-menu-mobile">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                <div id="Header-links-mobile">
                <Link to="/admin" style={{marginRight: '20px', textDecoration: 'none'}}>PAINEL ADMIN</Link>
                    <a>ORGANIZE SEU EVENTO</a>
                    <a>ACESSE SUA CONTA</a>
                    <Button text="CADASTRE-SE"/>
                </div>
            </div>
        );
    }
}

export default Header;