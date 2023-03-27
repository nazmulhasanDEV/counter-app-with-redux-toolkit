import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./slices/counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const counter = useSelector((state) => {
    return state.counter.count;
  });

  const dispatch = useDispatch();

  const addAmount = Number(amount) || 0;

  const amountChangeHandler = (value) => {
    setAmount(value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 p-15 tex-center d-flex justify-content-center mt-5">
            <div className="counter-body">
              <h3 className="text-center">{counter}</h3>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(increment())}
              >
                + Increment
              </button>

              <button
                className="btn btn-primary m-1"
                onClick={() => dispatch(decrement())}
              >
                - Decrement
              </button>

              <div className="mt-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Type amount"
                  onChange={(e) => amountChangeHandler(e.target.value)}
                />
                <button
                  className="btn btn-primary m-1"
                  onClick={() => dispatch(incrementByAmount(addAmount))}
                >
                  + Add amount
                </button>

                <button
                  className="btn btn-primary m-1"
                  onClick={() => dispatch(reset())}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default Counter;
