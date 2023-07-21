import './App.css';
import TodoPages from './components/TodoPages';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App  bg-gradient-to-tl from-sky-900 via-sky-700 to-sky-500 ">
      <Header></Header>
      <TodoPages></TodoPages>
    </div>
  );
}

export default App;
