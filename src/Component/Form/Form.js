import React from "react";

import "./Form.css";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updateInput: "",
      edit: false
    };
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  handleInput = val => {
    this.setState({
      updateInput: val
    });
  };





  render() {
    return (
      <div className="Form">
        Form
        <section>
          <article>
            <input
              id="input-Url"
              placeholder="Image URL Here"
              name="input"
              value={this.state.input}
              onChange={e => this.handleInput(e)}
            />
          </article>
          <article>
            <input
              id="input-Product"
              placeholder="Product Name Here"
              name="input"
              value={this.state.input}
              onChange={e => this.handleInput(e)}
            />
          </article>{" "}
          <article>
            <input
              id="input-Price"
              placeholder="Price Here"
              name="input"
              value={this.state.input}
              onChange={e => this.handleInput(e)}
            />
          </article>
          <button onClick={this.toggleEdit}>Cancel</button>
            <button onClick={this.handleSubmit}>Add to Inventory</button>
        </section>
      </div>
    );
  }
}

export default Form;
