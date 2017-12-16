import React from 'react';
import './index.css';

import IntroHeader from '../common/IntroHeader/';
import SkillsInfo from '../../Mock/skills.js';

class Skills extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        console.log(SkillsInfo.items);
        return (
            <div className="resume-div__content__wrapper">
                <IntroHeader title={SkillsInfo.title}/>
                <dl>
                {
                    SkillsInfo.items.map( (value, index) => {
                        return <dd key={index}>{value}</dd>
                    })
                }
                </dl>
            </div>
        );
    }
}

export default Skills;