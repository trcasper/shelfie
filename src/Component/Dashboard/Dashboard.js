import React from "react";

import "./Dashboard.css";
import Form from "../Form/Form";

import axios from "axios";

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
      input: ""
    };
  }

  render() {
    return (
      <section>
        <div>
          {this.state.product.map((element, index) => {
            return (
              <Form
                element={element}
                index={index}
                key={`Product ${index}`}
                delete={this.delete}
                updateState={this.updateState}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
export default Dashboard;
