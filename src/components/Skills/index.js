import React from 'react';
import './index.css';

import IntroHeader from '@/components/common/IntroHeader/';
import SkillsInfo from '@/Mock/skills.js';

class Skills extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="resume-div__content__wrapper">
            <div className="resume-div__skill__wrapper">
                <IntroHeader title={SkillsInfo.title}/>
                <dl>
                {
                    SkillsInfo.items.map( (value, index) => {
                        return <dd key={index}>{value}</dd>
                    })
                }
                </dl>
                </div>
            </div>
        );
    }
}

export default Skills;