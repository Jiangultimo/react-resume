import React from 'react';

import './index.css';
import profile from '@/static/profile.jpg';
import info from '@/Mock/intro.js';

import IntroHeader from '@/components/common/IntroHeader/';


class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <header className="resume-header__wrapper">
                <img src={profile} alt="" className="resume-img__profile"/>
                <div className="resume-div__intro">
                    <dl className="resume-dl__group">
                        {
                            info.intro.map( (val, index) => (
                                val.key == 'github' ?
                                 <dd key={val.key} className="resume-dd__item">GitHub: <a href={val.val} className="resume-a__github">{val.val}</a></dd> :
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