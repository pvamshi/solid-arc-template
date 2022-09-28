import { Component, createResource, createSignal, useContext } from "solid-js";


const fetchUser = async () => {
  console.log('making network call')
  return (await fetch(`http://localhost:3333/api`)).json();

}

const App: Component = () => {
  const [a, setA] = createSignal(10);
  const [result] = createResource('user', fetchUser)
  console.log({ result })
  return (
    <>
      {JSON.stringify(result())}
      {a()}
      <button onClick={() => setA(a() + 1)}>Increment</button>
    </>
  );
};

export default App;
