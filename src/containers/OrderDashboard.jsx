import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class OrderDashboard extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return(
			<div>hello</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.orders
	};
};

export default connect(mapStateToProps)(OrderDashboard);