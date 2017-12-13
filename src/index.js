import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/common/Layout/';
import Header from './components/common/Header/';
import Skills from './components/Skills/';
import Projects from './components/Projects/';
import Honor from './components/Honor/';
import SelfEvaluation from './components/SelfEvaluation/';

class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout>
                <Header />
                <Skills/>
                <Projects/>
                <Honor/>
                <SelfEvaluation/>
            </Layout>
        );

    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
)
