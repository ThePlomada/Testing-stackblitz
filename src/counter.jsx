import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class Counter extends Component {
  state = {}

  render() {
    return ( 
      <React.Fragment>
        <p> Hello World!</p>
        <p>following is one counter ----</p>
        <Button variant="primary">Primary</Button>{' '}
      </React.Fragment>
    )
  }
}

export default Counter; 