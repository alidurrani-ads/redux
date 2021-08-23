import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./containers/FormContainer";
import ToDoList from "./components/ToDoList";

function App() {
   
    const [inputText, SetInputText] = useState("");
    const [todos, SetTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [Filteredtodos, SetFilteredTodos] = useState([]);

   

    useEffect(() => {
        const url = 'https://6102676527d22500174b23d4.mockapi.io/api/v1/todo';
        fetch(url).then(resp => resp.json())
            .then(resp => SetTodos(resp))
    },[])

    

    

    const filterhandler = () => {
        switch(status) {
            case 'completed':
                SetFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'incomplete':
                SetFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                SetFilteredTodos(todos);
        }
    };
  return (
      <div className="App">
          <header>
              <h1> To do list </h1>    
          </header>
          <Form
              inputText={inputText}
              todos={todos}
              SetTodos={SetTodos}
              SetInputText={SetInputText}
              status={status}
              setStatus={setStatus}
          />
           
          <ToDoList
              todos={todos}
              SetTodos={SetTodos}
          />

          
    </div>
  );
}

export default App;