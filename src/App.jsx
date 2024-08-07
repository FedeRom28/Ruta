import { Component } from "react";
import Login from "./componentes/Login";
import Alumnos from "./componentes/Alumnos";
import'./App.css'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      menu:"Alumnos"
    }
  }
  render(){
    return(
      <>
        {this.state.menu === "login" &&
        <Login />
        }
        {this.state.menu === "alumnos" &&
          <Alumnos />
        }
      </>
    )
  }
}