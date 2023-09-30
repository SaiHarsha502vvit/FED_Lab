import React,{Component} from 'react';
class ChangeTextColor extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            color:'#FF00FF'
        }
    }
    redHandler=()=>
    {
        this.setState({color:'#FF0000'});
    }
    greenHandler=()=>
    {
        this.setState({color:'#00FF00'});
    }
    blueHandler=()=>
    {
        this.setState({color:'#0000FF'});
    }
    render()
    {
        return(
            <div>
                <h1 style ={{color:this.state.color}}>Text Color Demo</h1>
                <button type="button" onClick={this.redHandler}>RED</button>&nbsp;&nbsp;
                <button type="button" onClick={this.greenHandler}>GREEN</button>&nbsp;&nbsp;
                <button type="button" onClick={this.blueHandler}>BLUE</button>
            </div>
        );
    }
}
export default ChangeTextColor;