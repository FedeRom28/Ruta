import { Component } from "react";
import { Router  } from "wouter";
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
        cambiarMenu={(opcion) => this.setState({menu:opcion})}
        }
        {this.state.menu === "alumnos" &&
          <Alumnos />
          cambiarMenu={(opcion) => this.setState({menu:opcion})}
        }
      </>
    )
  }
}