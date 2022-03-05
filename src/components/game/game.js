import Instructions from "../instructions/instructions";
import React, { useState, useEffect } from "react";
import "./game.css";
import Header from "../header/header";
import GameContainer from "../game-box/game-box";
import Keyboard from "../keyboard/keyboard";
import { connect } from "react-redux";
import GameOver from "../gameover/game-over";

const Game = (props) => {
  const [showModal, setShowModal] = useState(true);
  const [showWord, setShowWord] = useState(true);

  useEffect(() => {
    props.onset();
  }, [props.tryAgain]);

  if (props.alert) {
    setTimeout(() => {
      props.onchangeAlert();
    }, 1000);
  }

  if (props.gameOver) {
    setTimeout(() => {
      setShowWord(false);
    }, 1000);
  }

  return (
    <main
      className="game"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <Header />
      {props.alert ? <p className="alert">Not a valid word</p> : null}
      <GameContainer />
      <Keyboard />
      {showModal ? <Instructions /> : null}
      {props.gameOver ? <GameOver pass={props.pass} /> : null}
      {props.gameOver & showWord &!props.pass ? <p className="alert">{props.word}</p> : null}
    </main>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onset: () => dispatch({ type: "SET_WORD" }),
    onchangeAlert: () => dispatch({ type: "CLEAR_ALERT" }),
  };
};
const mapStatetoProps = (state) => {
  return {
    pass: state.pass,
    gameOver: state.gameOver,
    tryAgain: state.tryAgain,
    alert: state.alert,
    word: state.word,
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Game);
