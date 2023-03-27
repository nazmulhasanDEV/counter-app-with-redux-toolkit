import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./slices/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => {
    return state.counter.count;
  });

  const dispatch = useDispatch();

  console.log(counter);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 p-15 tex-center d-flex justify-content-center mt-5">
            <div className="counter-body">
              <h3>{counter}</h3>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(increment())}
              >
                + Increment
              </button>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default Counter;
