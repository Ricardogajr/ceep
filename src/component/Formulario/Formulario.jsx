import React, { Component } from "react";

export default class Formulario extends Component {
  constructor() {
    super();
    this.titulo = "";
  }
  onClickEvento(evento){
    this.titulo = evento.target.value;
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" onChange={ this.onClickEvento.bind(this) }></input>
        <textarea name="" placeholder="Escreva sua nota."></textarea>
        <button >Criar nota</button>
      </form>
    );
  }
}