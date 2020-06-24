/** @format */

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import {
  setBottomCheckersColor,
  setTopCheckersColor,
  setBottomCheckersShape,
  setTopCheckersShape,
} from "../actions/Checkerboard";
import { CheckersColors, CheckersShapes } from "../reducers/CheckerboardPage";

const SettingsField = ({
  topCheckersColor,
  bottomCheckersColor,
  setTopCheckersColor,
  setBottomCheckersColor,

  topCheckersShape,
  bottomCheckersShape,
  setBottomCheckersShape,
  setTopCheckersShape,
}) => {
  const handleTopColorChange = (event) => {
    const value = CheckersColors.indexOf(event.target.value);

    if (Number.isNaN(value)) {
      return;
    } else {
      setTopCheckersColor(value);
      return;
    }
  };

  const handleTopShapeChange = (event) => {
    const value = CheckersShapes.indexOf(event.target.value);

    if (value < -1) {
      return;
    } else {
      setTopCheckersShape(event.target.value);
      return;
    }
  };

  const handleBottomColorChange = (event) => {
    const value = CheckersColors.indexOf(event.target.value);

    if (Number.isNaN(value)) {
      return;
    } else {
      setBottomCheckersColor(value);
      return;
    }
  };

  const handleBottomShapeChange = (event) => {
    const value = CheckersShapes.indexOf(event.target.value);

    if (value < -1) {
      return;
    } else {
      setBottomCheckersShape(event.target.value);
      return;
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ margin: "10px" }}>
        <Typography variant="h5">Top User</Typography>
        {CheckersColors.map((color, i) => (
          <Radio
            key={i}
            checked={topCheckersColor === color}
            onChange={handleTopColorChange}
            value={color}
            style={{ color: color }}
            name="radio-button-demo"
            inputProps={{ "aria-label": color }}
          />
        ))}
        {CheckersShapes.map((shape, i) => (
          <Radio
            key={i}
            checked={topCheckersShape === shape}
            onChange={handleTopShapeChange}
            value={shape}
            name="radio-button-demo"
            inputProps={{ "aria-label": shape }}
          />
        ))}
      </div>
      <div style={{ margin: "10px" }}>
        <Typography variant="h5">Bottom User</Typography>
        {CheckersColors.map((color, i) => (
          <Radio
            key={i}
            checked={bottomCheckersColor === color}
            onChange={handleBottomColorChange}
            value={color}
            style={{ color: color }}
            name="radio-button-demo"
            inputProps={{ "aria-label": color }}
          />
        ))}
        {CheckersShapes.map((shape, i) => (
          <Radio
            key={i}
            checked={bottomCheckersShape === shape}
            onChange={handleBottomShapeChange}
            value={shape}
            name="radio-button-demo"
            inputProps={{ "aria-label": shape }}
          />
        ))}
      </div>
    </div>
  );
};

SettingsField.propTypes = {
  topCheckersColor: PropTypes.string.isRequired,
  bottomCheckersColor: PropTypes.string.isRequired,

  setTopCheckersColor: PropTypes.func.isRequired,
  setBottomCheckersColor: PropTypes.func.isRequired,

  topCheckersShape: PropTypes.string.isRequired,
  bottomCheckersShape: PropTypes.string.isRequired,

  setBottomCheckersShape: PropTypes.func.isRequired,
  setTopCheckersShape: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    topCheckersColor: state.boardPage.topCheckersColor,
    bottomCheckersColor: state.boardPage.bottomCheckersColor,

    topCheckersShape: state.boardPage.topCheckersShape,
    bottomCheckersShape: state.boardPage.bottomCheckersShape,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setBottomCheckersColor: setBottomCheckersColor(dispatch),
  setTopCheckersColor: setTopCheckersColor(dispatch),

  setBottomCheckersShape: setBottomCheckersShape(dispatch),
  setTopCheckersShape: setTopCheckersShape(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsField);
