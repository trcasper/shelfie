import React from "react";


import axios from "axios";
import Form from "../Form/Form";
import "./Dashboard.css";
import { FORMERR } from "dns";



class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
      input: ""
    };
  }

  componentDidMount(){
    this.getInventory();
    }

    getInventory = () => {
        axios.get('/api/inventory').then(res => {
            console.log(res.data)
            this.setState({
                inventory: res.data
            })
        })
    }

    createProduct = () => {
        axios.post("/api/inventory").then(res =>
          this.setState({
            list: res.data,
            input: ""
          })
        );
      };



  



  render() {
     const mappedInventory = this.state.inventory.map(product, i) => {
        return (
            <FORM
            key={i}
            product={product}
            createProduct={this.createProduct}
            getInventory={this.getInventory}
            />
        )
        }

    
  }

}
export default Dashboard;
