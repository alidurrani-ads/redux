import React from 'react';



function Form({SetInputText, todos, SetTodos, inputText, status, setStatus}) {


    const InputTextHandler = (e) => {
        SetInputText(e.target.value);

    };

    const submitTodoHandler = async (e) => {
        e.preventDefault();
        SetTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);

        const data = { text: inputText };

        fetch('https://6102676527d22500174b23d4.mockapi.io/api/v1/todo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                response.json()
                
            })
            .then(data => {
                
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        
        SetInputText("");
    };

    const statusHandler = (e) => {
        console.log(e.target.value);

    };
    return (
       
      <form>
        <div className="form-row">
                <div className="form-group col-md-5">
                    <div className=" input-group">
                        <input value={inputText} onChange={InputTextHandler} type="text" className="form-control" placeholder="Enter Input" />
                        <div className=" input-group-append">
                            <button onClick={submitTodoHandler} type="submit" className=" btn btn-secondary">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-4">
                    <div className="select">
                        <select onChange={statusHandler} name="todos" className="custom-select">
                            <option value="all">ALL</option>
                            <option value="completed">Completed</option>
                            <option value="incomplete">Incomplete</option>
                         </select>
                    </div>
                </div>
        </div>
     </form>
        
    );
}

export default Form;