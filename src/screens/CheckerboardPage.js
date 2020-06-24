/** @format */

import React from "react";
import InputBox from "../components/InputBox";
import SettingsField from "../components/SettingsField";

import Checkerboard from "../components/Checkerboard";

const CheckerboardPage = () => {
  return (
    <div
      style={{
        height: "90vh",
      }}
    >
      <InputBox />
      <SettingsField />
      <Checkerboard />
    </div>
  );
};

CheckerboardPage.propTypes = {};

export default CheckerboardPage;
