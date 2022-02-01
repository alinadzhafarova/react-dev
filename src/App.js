import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ReactDOM from 'react-dom';

// Хуки


  function App() {
    const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label> Введите Ваше имя:<br/>
<input
    value={name}
    name="name"
    onChange={(e) => setName(e.target.value)}
/>
        </label>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Функциональный компонент
//
// function App() {
//   function handleClick(props){
//       console.log(props.target.value)
//   }
//
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <label> Введите Ваше имя:<br/>
//                     <input
//                         name="name"
//                         onChange={handleClick}
//                     />
//                 </label>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }
export default App;
