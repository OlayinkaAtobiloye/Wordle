import React, { useState } from "react";
import "./instructions.css";

const Instructions = () => {
  return (
    <div className="container">
      <section className="gameInstructions">
        <div className="close-icon">
          <game-icon icon="close"></game-icon>
        </div>
        <div className="instructions">
          <p>
            Guess the <strong>WORDLE</strong> in six tries.
          </p>
          <p>
            Each guess must be a valid five-letter word. Hit the enter button to
            submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
        </div>

        <hr />

        <div className="examples">
          <p>
            <strong>Examples</strong>
          </p>
          <div className="example">
            <div className="row">
              <div style={{ backgroundColor: "#6aaa64" }}>W</div>
              <div>E</div>
              <div>A</div>
              <div>R</div>
              <div>Y</div>
            </div>
            <p>
              The letter <strong>W</strong> is in the word and in the correct
              spot.
            </p>
          </div>

          <div className="example">
            <div className="row">
              <div>P</div>
              <div style={{ backgroundColor: "#c9b458" }}>I</div>
              <div>L</div>
              <div>L</div>
              <div>S</div>
            </div>
            <p>
              The letter <strong>I</strong> is in the word but in the wrong
              spot.
            </p>
          </div>

          <div className="example">
            <div className="row">
              <div>V</div>
              <div>A</div>
              <div>G</div>
              <div style={{ backgroundColor: "#787c7e" }}>U</div>
              <div>E</div>
            </div>
            <p>
              The letter <strong>U</strong> is not in the word in any spot.
            </p>
          </div>

          <hr></hr>

          <p>
            <strong>
              You can play as many WORDLE as you like! <strong></strong>
              Click to start.
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Instructions;
