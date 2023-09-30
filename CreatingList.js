import React, { Component } from "react";

class CreatingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      place: [],
      countVal: "",
      placeVal: "",
    };
  }

  countryInput = (e) => {
    this.setState({ countVal: e.target.value });
  };

  placeInput = (e) => {
    this.setState({ placeVal: e.target.value });
  };

  addNewItem = () => {
    if (this.state.countVal && this.state.placeVal) {
      this.setState({
        country: [...this.state.country, this.state.countVal],
        place: [...this.state.place, this.state.placeVal],
        countVal: "",
        placeVal: "",
      });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter the country name"
          value={this.state.countVal}
          onChange={this.countryInput}
        />
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Enter the Places"
          value={this.state.placeVal}
          onChange={this.placeInput}
        />
        &nbsp;&nbsp;
        <button onClick={this.addNewItem}>Add The Element</button>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Places</th>
            </tr>
          </thead>
          <tbody>
            {this.state.country.map((country, index) => (
              <tr key={index}>
                <td>{country}</td>
                <td>{this.state.place[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CreatingList;
