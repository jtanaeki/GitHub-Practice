import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Avatar</h2>
        <figure>
            <img src={this.props.picture} alt="My Avatar Pic" width="400" height="401"/>
            <figcaption>Think Different. Think Free.</figcaption>
        </figure>
      </div>
    );
  }
}

export default Avatar;
