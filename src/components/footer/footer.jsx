import React, { Component } from 'react';
import constants from '../../state/constants.json';
import './footer.css';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="page-footer font-small blue" id="footer">
                <div className="footer-copyright text-center py-3">
                    Brought to you by:<a href={constants.footer.urls.react.url}> {constants.footer.urls.react.title}
                    </a> and<a href={constants.footer.urls.bootstrap.url}> {constants.footer.urls.bootstrap.title}</a>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;