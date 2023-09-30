import React, { Component } from "react";

export default class RenderingArrayOfObjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayOfObjects: [],
      countryVal:"",
      placeVal:"",
    };
  }

  Country=(e)=>{
    this.setState({countryVal:e.target.value})
  }
  Place=(e)=>{
    this.setState({placeVal:e.target.value})
  }

  addItems=()=>
  {
    if(this.state.countryVal && this.state.placeVal)
    {
        const newItem=
        {
            country:this.state.countryVal,
            place:this.state.placeVal,
        };


        this.setState((prevState) => ({
          ArrayOfObjects: [...prevState.ArrayOfObjects, newItem],
          countryVal: "",
          placeVal: "",
        }));
    }
  }

  render() {
    return (
      <div>
        &nbsp; &nbsp;
        <input
          type="text"
          onChange={this.Country}
          placeholder="Enter the Country Name "
        />
        &nbsp; &nbsp;
        <input
          type="text"
          onChange={this.Place}
          placeholder="Enter the Place Name "
        />
        &nbsp; &nbsp;
        <button onClick={this.addItems}>Add</button>
        &nbsp; &nbsp;
        <table align="center">
          <thead>
            <tr>
              <th>Country</th>
              <th>Place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.ArrayOfObjects.map((ele, index) => (
                 <tr key={index}>
                       <td>{ele.country}</td>
                       <td>{ele.place}</td>
                </tr>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


