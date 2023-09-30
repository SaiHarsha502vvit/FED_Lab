import React, { Component } from "react";

class CountryPlace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friut: [],
      color: [],
      friutName: " ",
      friutColo: " ",
    };
  }

  Naming = (e) => {
    this.setState({ friutName: e.target.value });
  };

  Coloring = (e) => {
    this.setState({ friutColo: e.target.value });
  };

  addItems = () => {
    if (this.state.friut && this.state.color) {
      this.setState({
        friut: [...this.state.friut, this.state.friutName],
        color: [...this.state.color, this.state.friutColo],
        friutName: "",
        friutColo: "",
      });
    }
  };
  render() {
    return (
      <div>
        &nbsp; &nbsp;
        <input
          type="text"
          placeholder="Enter the country name"
          value={this.state.friutName}
          onChange={this.Naming}
        />  
        &nbsp; &nbsp;
        <input
          type="text"
          placeholder="Enter the Places"
          onChange={this.Coloring}
          value={this.state.friutColo}
        />
        &nbsp; &nbsp;
        <button onClick={this.addItems}>ADD</button>
        &nbsp; &nbsp;
        <table align="center">
        <thead>
            <tr>
              <th rowSpan={2}>Friut</th>
              <th rowSpan={2}>Color</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.friut.map((ele,index)=>
            (
               <tr key={index}>
                <td>{ele}</td>
                <td>{this.state.color[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryPlace;
