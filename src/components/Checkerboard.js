/** @format */

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function renderSquare(
  i,
  boardN,
  piecesColors = ["red", "black "],
  piecesShapes = ["30%", "50%"]
) {
  const x = i % boardN;
  const y = Math.floor(i / boardN);
  const black = (x + y) % 2 === 1;
  const fill = black ? "black" : "white";
  const piecesColor = i < boardN + boardN ? piecesColors[0] : piecesColors[1];
  const piecesShape = i < boardN + boardN ? piecesShapes[0] : piecesShapes[1];

  const squareSize = `${100 / boardN}%`;
  const pieceInside =
    i < boardN + boardN || i >= boardN * boardN - boardN * 2 ? (
      <div
        style={{
          backgroundColor: piecesColor,
          borderRadius: piecesShape,
          width: "100%",
          height: "100%",
        }}
      ></div>
    ) : (
      ""
    );

  return (
    <div key={i} style={{ width: squareSize, height: squareSize }}>
      <div
        style={{
          backgroundColor: fill,
          width: "100%",
          height: "100%",
        }}
      >
        {pieceInside}
      </div>
    </div>
  );
}

const InputBox = ({ boardN, checkersColors, checkersShapes }) => {
  const squares = [];
  const squaresNumber = boardN * boardN;

  for (let i = 0; i < squaresNumber; i++) {
    squares.push(renderSquare(i, boardN, checkersColors, checkersShapes));
  }

  return (
    <div style={{ height: "100%", textAlign: "-webkit-center" }}>
      <div
        style={{
          width: "55%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
      </div>
    </div>
  );
};

InputBox.propTypes = {
  boardN: PropTypes.number.isRequired,
  checkersColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  checkersShapes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
  return {
    boardN: state.boardPage.boardN,
    checkersColors: [
      state.boardPage.topCheckersColor,
      state.boardPage.bottomCheckersColor,
    ],
    checkersShapes: [
      state.boardPage.topCheckersShape,
      state.boardPage.bottomCheckersShape,
    ],
  };
};

export default connect(mapStateToProps, null)(InputBox);
