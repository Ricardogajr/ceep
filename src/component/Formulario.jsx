import React, { Component } from "react";

export default class Formulario extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo"></input>
        <textarea name="" placeholder="Escreva sua nota."></textarea>
        <button>Criar nota</button>
      </form>
    );
  }
}