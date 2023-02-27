import React from 'react';
import { useState } from 'react';
// 匯入 dispatch hook
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../features/Counter/CounterSlice';

function Counter() {
  const [numb, setNumb] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="container">
      <h1 className="text-center text-primary pt-3">My Counter</h1>
      <hr />
      <h2 className="text-center pb-2">Current Value</h2>
      <div className="btns d-flex justify-content-evenly">
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <h3 className="text-center">{count}</h3>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div className="type-number d-flex justify-content-evenly">
        <h3>type a number</h3>
        <h3>
          <input
            className="form-control"
            value={numb}
            onChange={(e) => {
              setNumb(e.target.value);
            }}
          />
        </h3>
        <button
          className="btn btn-warning"
          onClick={() => {
            dispatch(incrementByAmount(numb));
          }}
        >
          新增
        </button>
      </div>
    </div>
  );
}

export default Counter;
