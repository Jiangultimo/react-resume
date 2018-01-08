import React from 'react';
import './index.css';

import IntroHeader from '../common/IntroHeader/';
import projects from '../../Mock/projects.js';

import Detail from './detail.js';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: projects
        }
    }
    componentDidMount() {
        console.log(projects);
    }
    render() {
        return (
            <div className="resume-div__content__wrapper resume-div__projects__wrapper">
                <IntroHeader title={this.state.info.title} />
                {
                    this.state.info.projects.map((value, index) => {
                        return <div key={value.proName} className="resume-div__project">
                        <a className="resume-a__link" target="_blank" href={ value.proLink.includes('http') ? value.proLink : 'javascript:;'}>{value.proName}</a>: 
                            <dl><Detail detail={value.detail} /></dl>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Projects