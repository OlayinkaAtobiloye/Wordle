import React from "react";
import "./game-tile.css";
import { connect } from "react-redux";

class GameTile extends React.Component {
  checkvalidity = (index) => {
    if (this.props.current > this.props.row) {
      if (this.props.word[index] == this.props.realword[index]) {
        this.props.setkeycolor(this.props.word[index], "#6aaa64");
        return "tile green";
      } else if (this.props.realword.includes(this.props.word[index])) {
        this.props.setkeycolor(this.props.word[index], "#c9b458");
        return "tile yellow";
      } else {
        this.props.setkeycolor(this.props.word[index], "#787c7e");
        return "tile grey";
      }
    }
    return "tile";
  };

  render() {
    return (
      <section>
        <div className={this.props.word[0] ? this.checkvalidity(0) : "tile"}>
          {this.props.word ? this.props.word[0] : null}
        </div>
        <div className={this.props.word[1] ? this.checkvalidity(1) : "tile"}>
          {this.props.word ? this.props.word[1] : null}
        </div>
        <div className={this.props.word[2] ? this.checkvalidity(2) : "tile"}>
          {this.props.word ? this.props.word[2] : null}
        </div>
        <div className={this.props.word[3] ? this.checkvalidity(3) : "tile"}>
          {this.props.word ? this.props.word[3] : null}
        </div>
        <div className={this.props.word[4] ? this.checkvalidity(4) : "tile"}>
          {this.props.word ? this.props.word[4] : null}
        </div>
      </section>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    realword: state.word,
    current: state.current,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    setkeycolor: (letter, color) =>
      dispatch({ type: "SET_KEYCOLOR", key: letter, color: color }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(GameTile);
