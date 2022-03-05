import React from "react";
import "./keyboard.css";
import { connect } from "react-redux";

class Keyboard extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode == 8) {
        this.props.onedit("DEL");
      } else if (event.keyCode == 13) {
        this.props.oncheck();
      } else if ((event.keyCode >= 65) & (event.keyCode <= 90)) {
        this.props.onedit(event.key.toUpperCase());
      }
    });
  }

  onEdit = (event) => {
    if (event.target.dataset.check) {
      this.props.oncheck();
    }
    if (event.target.dataset.value) {
      this.props.onedit(event.target.dataset.value);
    }
  };

  render() {
    return (
      <section className="keyboard">
        <div className="key-row" onClick={this.onEdit}>
          <button
            data-value="Q"
            style={{ backgroundColor: this.props.letterColors["Q"] }}
          >
            Q
          </button>
          <button
            data-value="W"
            style={{ backgroundColor: this.props.letterColors["W"] }}
          >
            W
          </button>
          <button
            data-value="E"
            style={{ backgroundColor: this.props.letterColors["E"] }}
          >
            E
          </button>
          <button
            data-value="R"
            style={{ backgroundColor: this.props.letterColors["R"] }}
          >
            R
          </button>
          <button
            data-value="T"
            style={{ backgroundColor: this.props.letterColors["T"] }}
          >
            T
          </button>
          <button
            data-value="Y"
            style={{ backgroundColor: this.props.letterColors["Y"] }}
          >
            Y
          </button>
          <button
            data-value="U"
            style={{ backgroundColor: this.props.letterColors["U"] }}
          >
            U
          </button>
          <button
            data-value="I"
            style={{ backgroundColor: this.props.letterColors["I"] }}
          >
            I
          </button>
          <button
            data-value="O"
            style={{ backgroundColor: this.props.letterColors["O"] }}
          >
            O
          </button>
          <button
            data-value="P"
            style={{ backgroundColor: this.props.letterColors["P"] }}
          >
            P
          </button>
        </div>
        <div className="key-row" onClick={this.onEdit}>
          <button
            data-value="A"
            style={{ backgroundColor: this.props.letterColors["A"] }}
          >
            A
          </button>
          <button
            data-value="S"
            style={{ backgroundColor: this.props.letterColors["S"] }}
          >
            S
          </button>
          <button
            data-value="D"
            style={{ backgroundColor: this.props.letterColors["D"] }}
          >
            D
          </button>
          <button
            data-value="F"
            style={{ backgroundColor: this.props.letterColors["F"] }}
          >
            F
          </button>
          <button
            data-value="G"
            style={{ backgroundColor: this.props.letterColors["G"] }}
          >
            G
          </button>
          <button
            data-value="H"
            style={{ backgroundColor: this.props.letterColors["H"] }}
          >
            H
          </button>
          <button
            data-value="J"
            style={{ backgroundColor: this.props.letterColors["J"] }}
          >
            J
          </button>
          <button
            data-value="K"
            style={{ backgroundColor: this.props.letterColors["K"] }}
          >
            K
          </button>
          <button
            data-value="L"
            style={{ backgroundColor: this.props.letterColors["L"] }}
          >
            L
          </button>
        </div>
        <div className="key-row" onClick={this.onEdit}>
          <button
            data-check="\n"
            style={{ backgroundColor: this.props.letterColors["\n"],
          'min-width': '50px' }}
          >
            ENTER
          </button>
          <button
            data-value="Z"
            style={{ backgroundColor: this.props.letterColors["Z"] }}
          >
            Z
          </button>
          <button
            data-value="X"
            style={{ backgroundColor: this.props.letterColors["X"] }}
          >
            X
          </button>
          <button
            data-value="C"
            style={{ backgroundColor: this.props.letterColors["C"] }}
          >
            C
          </button>
          <button
            data-value="V"
            style={{ backgroundColor: this.props.letterColors["V"] }}
          >
            V
          </button>
          <button
            data-value="B"
            style={{ backgroundColor: this.props.letterColors["B"] }}
          >
            B
          </button>
          <button
            data-value="N"
            style={{ backgroundColor: this.props.letterColors["N"] }}
          >
            N
          </button>
          <button
            data-value="M"
            style={{ backgroundColor: this.props.letterColors["M"] }}
          >
            M
          </button>
          <button
            data-value="DEL"
            style={{ backgroundColor: this.props.letterColors["M"] }}
          >
            DEL
          </button>
        </div>
      </section>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    letterColors: state.letterColors,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onedit: (letter) => dispatch({ type: "EDIT_WORD", letter: letter }),
    oncheck: () => dispatch({ type: "CHECK_WORD" }),
    onset: () => dispatch({ type: "SET_WORD" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Keyboard);
