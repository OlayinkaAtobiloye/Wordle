import React from "react";
import GameTile from "../game-tile/game-tile";
import { connect } from "react-redux";

const GameContainer = (props) => {
  return (
    <div>
      <GameTile word={props.word1} realword={props.word} row="1" />
      <GameTile word={props.word2} realword={props.word} row="2" />
      <GameTile word={props.word3} realword={props.word} row="3" />
      <GameTile word={props.word4} realword={props.word} row="4" />
      <GameTile word={props.word5} realword={props.word} row="5" />
      <GameTile word={props.word6} realword={props.word} row="6" />
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    word: state.word,
    word1: state.word1,
    word2: state.word2,
    word3: state.word3,
    word4: state.word4,
    word5: state.word5,
    word6: state.word6,
  };
};

export default connect(mapStatetoProps, null)(GameContainer);
