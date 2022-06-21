import React, { useState } from "react";
import configurations from "../../state/constants.js";
import "./header.css";

function Header(props) {
    const constants = configurations();
    const img = {alt: "", size: constants["header-img-size"], url: constants["random-photo-url"]};
    const [ tabs ] = useState(constants["header-tabs"])
    const [ name ] = useState(constants.name);
    const [ email ] = useState(constants.email);
    const [ activeTab, setActiveTab ] = useState(0);

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
                <a className="navbar-brand" href="/">
                    <img className="rounded-circle" src={img.url} width={img.size} height={img.size} alt={img.alt} />
                </a>
                <span className="navbar-brand mb-0 h1">{name}</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <React.Fragment>
                            {
                                tabs.map((t, index) => { return getTab(t, index); })
                            }
                        </React.Fragment>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a className="nav-form-a" href={"mailto:" + email}>Get in touch</a>
                    </form>
                </div>
            </nav>
        </React.Fragment>
    );

    function _onClick(_index){
        setActiveTab(_index);
        props.changeTab(_index);
    }

    function getTab(t, index) {
        return (t || {}).href ?
            t.file ?
                <a className="nav-link text-info" download
                                key={t + '_' + activeTab + "-" + index.toString()}
                                href={process.env.PUBLIC_URL + t.href}
                                rel="noreferrer"
                                target="_blank">
                    {t.tab}
                </a> :
                <a className="nav-link text-info"
                                key={t + '_' + activeTab + "-" + index.toString()}
                                href={t.href}
                                rel="noreferrer"
                                target="_blank">
                    {t.tab}
                </a> :
            <button className="btn btn-link"
                            id="nav-form-a"
                            key={t + '_' + activeTab + "-" + index.toString()}
                            onClick={() => {_onClick(index)}}
                            type="button">
                {t.tab}
            </button>;
    }
}

export default Header;