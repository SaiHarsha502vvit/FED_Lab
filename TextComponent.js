import React,{Component} from "react";


class TextComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            color: "#FACDAB"
        };
    }
    redChange = () => {
        this.setState({ color: "red" });
    };
    greenChange = () => {
        this.setState({ color: "green" });
    };
    blueChange = () => {
        this.setState({ color: "blue" });
    };
    render(){
        return(
            <div>
                &nbsp;&nbsp;
                <h1 style={{ color: this.state.color }}>Hello guys</h1>
                &nbsp;&nbsp;
                <button onClick={this.redChange}>Red</button>&nbsp;
                <button onClick={this.greenChange}>Green</button>&nbsp;
                <button onClick={this.blueChange}>Blue</button>&nbsp;

            </div>
        );
    }
}

export default TextComponent;