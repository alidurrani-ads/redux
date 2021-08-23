import React from 'react';
import Todo from "./Todo";

function TodoList({todos, SetTodos}) {

    return (

        <div className='todo-container py-5'>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                        text={todo.text}
                        key={todo.id}
                        todos={todos}
                        todo={todo}
                        SetTodos={SetTodos} />
                ))}
            </ul>
        </div>
        
        );


}
export default TodoList;