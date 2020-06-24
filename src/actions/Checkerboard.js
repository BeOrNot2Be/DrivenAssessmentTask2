/** @format */

export const UPDATE_BOARD_N = "UPDATE_BOARD_N";
export const UPDATE_TOP_CHECKERS_COLOR = "UPDATE_TOP_CHECKERS_COLOR";
export const UPDATE_BOTTOM_CHECKERS_COLOR = "UPDATE_BOTTOM_CHECKERS_COLOR";
export const UPDATE_TOP_CHECKERS_SHAPE = "UPDATE_TOP_CHECKERS_SHAPE";
export const UPDATE_BOTTOM_CHECKERS_SHAPE = "UPDATE_BOTTOM_CHECKERS_SHAPE";

export const setBoardN = (dispatch) => (value) => {
  dispatch({
    type: UPDATE_BOARD_N,
    dataInput: value,
  });
};

export const setTopCheckersColor = (dispatch) => (value) => {
  dispatch({
    type: UPDATE_TOP_CHECKERS_COLOR,
    dataInput: value,
  });
};

export const setBottomCheckersColor = (dispatch) => (value) => {
  dispatch({
    type: UPDATE_BOTTOM_CHECKERS_COLOR,
    dataInput: value,
  });
};

export const setTopCheckersShape = (dispatch) => (value) => {
  dispatch({
    type: UPDATE_TOP_CHECKERS_SHAPE,
    dataInput: value,
  });
};

export const setBottomCheckersShape = (dispatch) => (value) => {
  dispatch({
    type: UPDATE_BOTTOM_CHECKERS_SHAPE,
    dataInput: value,
  });
};
