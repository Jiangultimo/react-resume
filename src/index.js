import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/common/Layout/';
import Header from './components/common/Header/';

class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout>
                <Header />
            </Layout>
        );

    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
)
