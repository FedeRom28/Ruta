import { Component } from "react";

export default class Boton extends Component{
    constructor(porps){
        super(props);
    }
    render(){
        return(
            <span
            className="Boton"
            onClick={() => this.props.Click}
                                                                    >

            </span>
        )
    }
}