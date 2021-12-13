import React from "react";

const initialState = {
  entities: [],
};

export const reducer = (state = initialState, action) => {
  console.log(state);
  return state;
};

const App = () => {
  return (
    <>
      <form>
        <input />
      </form>
      <button>Mostrar</button>
      <button>Completador</button>
      <button>Incompletos</button>
      <ul>
        <li>todo 1</li>
        <li>todo 2</li>
      </ul>
    </>
  );
};
export default App;
