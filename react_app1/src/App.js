// import Button from "./Button";
// import styles from "./App.module.css";
// import { useState, useEffect } from "react";
// import Movie from "./Movie";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1)
//   const onChange = (event) => setKeyword(event.target.value);

//   console.log('I run all the time');
//   const once = () => {
//     console.log("I run only once");
//   }
//   useEffect(once, []);

//   useEffect(() => {
//     console.log("SEARCH FOR", keyword);
//   }, [keyword]);

//   useEffect(() => {
//     console.log("Counter changes", keyword);
//   }, [counter]);



//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
//       <h1 className={styles.title}>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// };

// function Hello() {
//   function destroyedFn() {
//     console.log("destroy :(");
//   }

//   function effectFn() { //cleanup function
//     console.log("created :)");
//     return destroyedFn;
//   }

//   useEffect(effectFn, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);

//   return <div>
//     {showing ? <Hello /> : null}
//     <button onClick={onClick}> {showing ? "Hide" : "Show"}</button>
//   </div>
// }

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);

//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo == "") {
//       return;
//     }
//     setToDo("");
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     console.log(toDo);
//   };

//   return (
//     <div>
//       <h1>My To Dos({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
//         <button>Add To Do</button>
//       </form>

//       <hr />

//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);

//   return <div>
//     <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//     {loading ? <strong>Loading...</strong> : (
//       <select>
//         {coins.map((coin) => (
//           <option>
//             {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
//           </option>
//         ))}
//       </select>
//     )}
//   </div>
// }


