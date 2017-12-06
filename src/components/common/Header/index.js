import React from 'react';

import './index.css';
import Profile from '../../../static/profile.png';
import info from '../../../Mock/intro.js';


class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <header className="resume-header__wrapper">
                <img src={Profile} alt="" className="resume-img__profile"/>
                <div className="resume-div__intro">
                    <dl className="resume-dl__group">
                        {
                            info.intro.map( (val, index) => (
                                <dd key={val.key} className="resume-dd__item">{val.val}</dd>
                            ))
                        }
                    </dl>
                </div>
            </header>
        )
    }
}

export default Header;