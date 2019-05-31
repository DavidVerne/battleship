import React, { Component } from 'react';

// this function lets us click on the squares
export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }