/** @format */

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { setBoardN } from "../actions/Checkerboard";

const InputBox = ({ setBoardN }) => {
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    if (Number.isNaN(value)) {
      return;
    } else {
      setBoardN(value);
      return;
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <TextField
        id="outlined-search"
        name="tags"
        onChange={handleChange}
        label="board N size:"
        type="number"
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

InputBox.propTypes = {
  setBoardN: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setBoardN: setBoardN(dispatch),
});

export default connect(null, mapDispatchToProps)(InputBox);
