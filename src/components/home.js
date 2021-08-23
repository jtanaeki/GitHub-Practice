import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { name: '' };
  }
  shouldComponentUpdate() {
    return true;
  }
  handleChange = (event) => {
    this.setState({name: event.target.value});
  }
  myFunc = () => {
    alert('Welcome ' + this.state.name);
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <form>
          <p>
            Visitor Name: <input type="text" onChange={this.handleChange}/>
            <button onClick={this.myFunc}>Enter</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Home;
