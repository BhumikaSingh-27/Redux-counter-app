import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
// import store from "./Store";
import { increment, decrement } from "./actions/actionCreators";

export default function App() {
  const value = useSelector((state) => state.updateCounter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App </h1>
      <h2>using React and Redux</h2>
      <div>
        <h1>{value}</h1>
      </div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>

      <h6>approach one</h6>
    </div>
  );
}

//tryouts
//   console.log(value,"1")
// console.log(store.getState().updateCounter.count,"2")
