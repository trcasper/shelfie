import React from "react";


import axios from "axios";
import Form from "../Form/Form";
import Product from "../Product/Product";
import "./Dashboard.css";





class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      image: "",
      name: "",
      price: 0,
      edit: false,
    };
  }

  componentDidMount(){
    this.getInventory();
    }

    getInventory = () => {
        axios.get('/api/inventory').then(res => {

            this.setState({
                inventory: res.data
            })
        })
        .catch(err => console.log(err))
    }

    handleInput = (val) => {
        this.setState({
            image: val,
            name: val,
            price: val
        })
    }



    updateInventory = (data) => {
        this.setState({
            inventory: data,
        })
    }

  render() {
      let {inventory, image, name, price } = this.state;

      return (
          <div>
              {inventory.map((product, index) => {
                  console.log(product)
                 return  <Product product={product} index={index} key={product.id}/>
              })}
          </div>
      )
  }

     
  

     
  

};
export default Dashboard;
