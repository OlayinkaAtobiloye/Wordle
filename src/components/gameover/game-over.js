import React from "react";
import { connect } from "react-redux";

const GameOver = (props) => {
  return (
    <div className="container">
      <section className="gameInstructions" style={{ width: "100%" }}>
        {props.pass ? (
          <div style={{ color: "green" }}>
            <p>
              <strong>YOU WON!</strong>
            </p>
            <p
              onClick={props.setRefresh}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Play again
            </p>
          </div>
        ) : (
          <div style={{ color: "red" }}>
            <p>
              <strong>Ooops! Sorry, you lost.</strong>
            </p>
            <p
              onClick={props.setRefresh}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Try again
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    pass: state.pass,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    setRefresh: () => dispatch({ type: "REFRESH" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(GameOver);
