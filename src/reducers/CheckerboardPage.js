/** @format */

import {
  UPDATE_BOARD_N,
  UPDATE_TOP_CHECKERS_COLOR,
  UPDATE_BOTTOM_CHECKERS_COLOR,
  UPDATE_TOP_CHECKERS_SHAPE,
  UPDATE_BOTTOM_CHECKERS_SHAPE,
} from "../actions/Checkerboard";

const initialState = {
  boardN: 8,
  topCheckersColor: "red",
  topCheckersShape: "30%",
  bottomCheckersColor: "black",
  bottomCheckersShape: "50%",
};

export const CheckersColors = ["red", "black", "yellow", "green", "white"];
export const CheckersShapes = ["10%", "20%", "30%", "40%", "50%"];

const verifyNewBoardN = (newBoardN) => {
  return Number.isInteger(newBoardN);
};

const verifyCheckersColors = (CheckersColorsID) => {
  if (Number.isInteger(CheckersColorsID)) {
    if (CheckersColorsID > -1 && CheckersColorsID < CheckersColors.length)
      return true;
  } else {
    return false;
  }
};

const SendPageReducers = (state = initialState, action) => {
  const { type, dataInput } = action;

  switch (type) {
    case UPDATE_BOARD_N:
      if (verifyNewBoardN(dataInput)) {
        return {
          ...state,
          boardN: dataInput,
        };
      }
      return state;

    case UPDATE_TOP_CHECKERS_COLOR:
      if (verifyCheckersColors(dataInput)) {
        return {
          ...state,
          topCheckersColor: CheckersColors[dataInput],
        };
      }
      return state;

    case UPDATE_BOTTOM_CHECKERS_COLOR:
      if (verifyCheckersColors(dataInput)) {
        return {
          ...state,
          bottomCheckersColor: CheckersColors[dataInput],
        };
      }
      return state;

    case UPDATE_TOP_CHECKERS_SHAPE:
      return {
        ...state,
        topCheckersShape: dataInput,
      };

    case UPDATE_BOTTOM_CHECKERS_SHAPE:
      return {
        ...state,
        bottomCheckersShape: dataInput,
      };

    default:
      return {
        ...state,
      };
  }
};

export default SendPageReducers;
