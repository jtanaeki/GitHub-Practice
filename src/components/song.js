import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Song</h2>
        <audio controls>
            <source src={this.props.audio} type="audio/mpeg"/>
        </audio>
      </div>
    );
  }
}

export default Song;
