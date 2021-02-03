import Formulario from "./component/Formulario";
import Post from "./component/Post";
import React, { Component } from 'react';

export default class App extends Component{
  render() {
    return (
      <section>
        <Formulario />
        <Post />
      </section>
    );
  }
}
