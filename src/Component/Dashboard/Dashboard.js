import React from "react";


import axios from "axios";
import Form from "../Form/Form";
import "./Dashboard.css";




class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
      product: ""
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
        .catch(err => console.log(err))
    }

    createProduct = () => {
        const newProduct = {
            product: this.state.product
        }
        axios.post('/api/inventory', newProduct).then(res => {
            this.setState({
                inventory: res.data
            })
        })
        .catch(err => console.log(err))

    }

  



  render() {
     const mappedInventory = this.state.inventory.map((product, i) => {
        return (
            <Form
            key={i}
            product={product}
            createProduct={this.createProduct}
            getInventory={this.getInventory}/>
        )
     })
        
        return(
            <div>

            </div>
        )
     }
    
     
  

     
  

};
export default Dashboard;
