import './App.css';
import { createStore } from 'redux';
const initialState = {
  count: 0,
};
const counterReducer = (state, action) => {
  if (action.type === 'increment') {
    // console.log(state.count + 1);
    return { count: state.count + 1 };
  }
  if (action.type === 'decrement') {
    return { count: state.count - 1 };
  }
  return state;
};
const store = createStore(counterReducer, initialState);

function App() {
  // console.log(store.getState().count);
  return (
    <div className="App">
      <header className="App-header">
        <p> {store.getState().count} </p>
        <div>
          <button onClick={() => store.dispatch({ type: 'increment' })}>
            +
          </button>
          <button onClick={() => store.dispatch({ type: 'decrement' })}>
            -
          </button>
        </div>
      </header>
    </div>
  );
}
store.subscribe(counterReducer);
export default App;
