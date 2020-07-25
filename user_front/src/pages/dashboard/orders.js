import React from 'react';
import '../../App.css';


class Orders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orderList: []
		}
	}

	componentDidMount() {
		fetch("/getOrders")
			.then(res => res.json())
			.then(
				(result) => {
					debugger;
					console.log(result);
					this.setState({
						orderList: result.orders
					});
				},
				(error) => {

				}
			)
	}
	render() {
		return (
			<div>
				<h1 id="header">Order Dashboard</h1>
				<div id="grid">
					{this.state.orderList.map(el => (
						<div
							style={{ marginBottom: '20px' }}
							title={`Order ${el.orderNumber}`}
							intent={el.orderStatus === 'completed' ? 'success' : ('' || el.status === 'cancelled' ? 'warning' : '')}
							icon={el.orderStatus === 'completed' ? 'tick' : ('' || el.status === 'cancelled' ? 'cross' : '')}
							key={el.id}
						>
							<p>Status: {el.orderStatus}</p>
							<ul>
								<li>Order Description: <strong>{el.orderDescription}</strong></li>
								<li>Quantity: <strong>{el.quantity}</strong></li>
								<li>Product Code: <strong>{el.productCode}</strong></li>
								<li>Product Description: <strong>{el.productDescription}</strong></li>
								<li>Topping1: <strong>{el.topping1}</strong></li>
								<li>Topping2: <strong>{el.topping2}</strong></li>
								<li>Topping3: <strong>{el.topping3}</strong></li>
								<li>Price: <strong>{el.price}</strong></li>
							</ul>

							<div id="Update">
								<div
									icon="tick"
									intent="primary"
									disabled={el.status === 'completed'}
									id={el.orderNumber}
									status="completed"
								/>
								<div />
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Orders;
