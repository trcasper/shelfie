import React from 'react'

import './Form.css'
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            editInput: props.element
        };
    }

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    
      };

      save = () => {
          const index = this.props.index;
          const newProduct = this.state.editInput

          console.log(index, newProduct);

          axios
            .put(`/app/inventory`, {index, newProduct})
            .then(res => this.props.updateState(res.data))

            this.setState({
                editing: false
            });
      }






    render(){
   
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
                 </article>                 <article>
                    <input
                    id="input-Price"
                     placeholder="Price Here"
                     name="input"
                     value={this.state.input}
                     onChange={e => this.handleInput(e)}
                    />
                 </article>

                 <button >Cancel</button>
                 <button onClick={() => this.save()}>Add to Inventory</button>

             </section>
         </div>
     )

    }
}

export default Form
