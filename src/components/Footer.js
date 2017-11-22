import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
export default class Footer extends Component {
	constructor(props){
		super(props);
	}

	renderFilter(filter, name) {
		if(filter === this.props.filter) {
			return name;
		}
		return (
			<a href={"#"} onClick={ e => {
				e.preventDefault();
				this.props.onFilterChange(filter);
			}}>
			{name}
			</a>
		)
	}

	render() {
		return(
			<p>
				Show:{' '}
				{this.renderFilter('SHOW_ALL', 'All')}
				{', '}
				{this.renderFilter('SHOW_COMPLETED', 'Completed')}
				{'， '}
				{this.renderFilter('SHOW_ACtIVE', 'Active')}
				.
			</p>
		);
	}
}

Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTVIE'
	]).isRequired
}