import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }
  handleSubmit = (event) => {
    alert('The message, \"' + this.state.message + '\" has been received');
  }
  handleChange = (event) => {
    this.setState({message: event.target.value});
  }
  render() {
    return (
      <footer>
          <form onSubmit={this.handleSubmit}>
              <h2>Contact Form</h2>
              <p>Name: </p>
              <input type="text"/>
              <p>Email: </p>
              <input type="text"/>
              <p>Message: </p>
              <textarea onChange={this.handleChange}/>
              <br/><br/>
              <input type="submit"/>
          </form>
      </footer>
    );
  }
}

export default Contact;
