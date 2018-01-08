import React from 'react';

class DetailFragment extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { detail } = this.props;
        return (
            <React.Fragment>
            {
                detail.map((value, index) => {
                    return <dd className="" key={value.key}>{value.label}： {value.value}</dd>
                })
            }
            </React.Fragment>
        );
    }
}

export default DetailFragment;
