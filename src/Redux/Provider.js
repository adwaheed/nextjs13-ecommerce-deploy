"use client";
import React, { Children } from "react";
import { Provider } from "react-redux";
import store from "./Store";

const Myprovider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Myprovider;
