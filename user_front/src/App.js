import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [],
      allChecked: false
    }
  }

  handleChange = e => {
    let itemName = e.target.name;
    let checked = e.target.checked;

    this.setState(prevState => {
      let { orderList, allChecked } = prevState;
      if (itemName === "checkAll") {
        allChecked = checked;
        orderList = orderList.map(item => ({ ...item, isChecked: checked }));
      } 
      return { orderList, allChecked };
    });
  };

  componentDidMount() {
    fetch("/getOrders")
      .then(res => res.json())
      .then(
        (result) => {
          debugger;
          console.log(result);
          this.setState({
            isLoaded: true,
            orderList: result.orders
          });
        },
        (error) => {
          
        }
      )
  }
  
  render() {
    return(
      <div className="pad15">
        <table id="Orders">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Order Description</th>
              <th>quantity</th>
              <th>product Code</th>
              <th>product Description</th>
              <th>Topping1</th>
              <th>Topping2</th>
              <th>Topping3</th>
              <th>chefId</th>
              <th>Individual Quantity</th>
              <th>price</th>
              <th>orderStatus</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orderList && this.state.orderList.map((item, i) => (
              <tr key={i}>
                <td>{item.orderNumber}</td>
                <td>{item.orderDescription}</td>
                <td>{item.quantity}</td>
                <td>{item.productCode}</td>
                <td>{item.productDescription}</td>
                <td>{item.topping1}</td>
                <td>{item.topping2}</td>
                <td>{item.topping3}</td>
                <td>{item.chefId}</td>
                <td>{item.indvQuantity}</td>
                <td>{item.price}</td>
                <td>{item.orderStatus}</td>
              </tr>))}
          </tbody>
        </table>
      </div>
     )
  }
}

export default App;
