import React from 'react';
import { Button } from '@blueprintjs/core';


class UpdateOrder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orderList: []
		}
	}
	updateOrder = (e) => {

	};
	render() {
		return (
			<>
				<Button
					style={{ margin: '5px' }}
					icon={this.props.icon}
					intent={this.props.intent}
					loading={this.props.loading}
					disabled={this.props.disabled}

					onClick={e => {

					}}
				>
				</Button>
			</>
		);
	}
};

export default UpdateOrder;
