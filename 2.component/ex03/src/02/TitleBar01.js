import React, {Component} from 'react';

export default class TitelBar01 extends Component {
  constructor(props) {
    super(props);
    
    this.no = 10;
    this.state = {
      no: 10
    };
  }

  onClickHandler() {
    // this.no VS this.state.no
    this.no++;
    this.setState({
      no: this.state.no + 1
    });
    console.log('TitleBar01 clicked!:' + this.no );
  }

  render() {
    return (
      <h1
        onClick={this.onClickHandler.bind(this)}
        style={{
          cursor: 'pointer'
        }}>
        Function Handler(Class Component)
        <br />
        {
        // this.no VS this.state.no
        
          `${this.no} VS ${this.state.no}`
          
        }
      </h1>
    )
  }
}