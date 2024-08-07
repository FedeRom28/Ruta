import { Component } from "react";
import { Redirect, Route, Switch } from "wouter";
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
      {/*header*/}
      <Switch>
      <Route path="/"><Redirect to ="/login"/></Route>
      <Route path="/login">
      <login/>
      </Route>
      <Route path="/alumnos/:id">
      {(params) => <Alumnos id= {params.id}/>}
      </Route>
      <Route>404</Route>
        </Switch>
        {/*footer*/}
      </>
    )
  }
}
