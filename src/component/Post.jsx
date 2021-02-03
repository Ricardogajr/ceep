import React, { Component } from "react";
import Card from "./Card";

export default class Post extends Component {
  render() {
    return (
      <ul>
        <li>
          <Card />
        </li>
      </ul>
    );
  }
}
