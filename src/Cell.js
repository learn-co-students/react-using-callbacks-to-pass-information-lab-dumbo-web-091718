import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = (event) => {
    // let selectedColor = this.props.handleClick();
    this.setState({
      color: this.props.handleCellClick()
    })
    // console.log(this.props.handleCellClick())
    }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }

}
