import './App.scss';
import Header from "./components/Header/Header";
import TodoInputForm from "./components/TodoInputForm/TodoInputForm";
import TodoList from "./components/TodoList/TodoList";

function App(props) {
  return (
    <div className='app'>
      <Header />
      <TodoInputForm />
      <TodoList />
    </div>
  );
}

export default App;
