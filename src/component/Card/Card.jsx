import React, { Component } from "react";
import './estilo.css'
export default class Card extends Component {
  render() {
    return (
      <ul className="Card_ul">
        {Array.of("Trabalho", "Estudos", "Blog").map((categoria) => {
          return (
            <li>
              <section>
                <header className="Card_CardTitle">{categoria}</header>
                <p className="Card_CardItem">Texto</p>
              </section>
            </li>
          );
        })}
      </ul>
    );
  }
}
