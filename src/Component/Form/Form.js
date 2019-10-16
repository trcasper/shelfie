import React from "react";

import "./Form.css";
import axios from "axios";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      inventory: "",
      image: "",
      name: "",
      price: 0
    };
  }

  cancel = () => {
    this.setState({
      image: "",
      name: "",
      price: 0
    });
  };
  handleInput = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,

    });
  };
  createProduct = () => {
    let { image, name, price } = this.state;
    console.log(image, name, price);

    axios.post("/api/inventory", { image, name, price }).then(res => {
      console.log(res)
      this.setState({
        products: res.data,
        image: "",
        name: "",
        price: ""
      });
    });
  };

  render() {
    console.log(this.state)
    return (
      <div className="Form">
        <div className="image-box">
          <img src = {this.state.image} />
        </div>
        <div className="input-box">
          Image URL:
          <br />
          <input
            name="image"
            value={this.state.image}
            onChange={e => this.handleInput(e)}
          ></input>
        </div>
        <div className="input-box">
          Product Name:
          <br />
          <input
            name="name"
            value={this.state.name}
            onChange={e => this.handleInput(e)}
          ></input>
        </div>
        <div className="input-box">
          Price:
          <br />
          <input
            name="price"
            value={this.state.price}
            onChange={e => this.handleInput(e)}
          ></input>
        </div>
        <div className="button-display">
          <button onClick={this.cancel}>Cancel</button>
          <button onClick={() => this.createProduct()}>Add To Inventory</button>
        </div>
      </div>
    );
  }
}

//   render() {
//     return (
//       <div className="Form">
//         Form
//         <section>
//           <article>
//             <input
//               id="input-Url"
//               placeholder="Image URL Here"
//               name="input"
//               value={this.state.input}
//               onChange={e => this.handleInput(e)}
//             />
//           </article>
//           <article>
//             <input
//               id="input-Product"
//               placeholder="Product Name Here"
//               name="input"
//               value={this.state.input}
//               onChange={e => this.handleInput(e)}
//             />
//           </article>{" "}
//           <article>
//             <input
//               id="input-Price"
//               placeholder="Price Here"
//               name="input"
//               value={this.state.input}
//               onChange={e => this.handleInput(e)}
//             />
//           </article>
//           <button onClick={this.toggleEdit}>Cancel</button>
//             <button onClick={this.handleSubmit}>Add to Inventory</button>
//         </section>
//       </div>
//     );
//   }
// }

export default Form;
