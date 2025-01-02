import React, { useState } from 'react';
import AddForm from './Components/AddForm.tsx';
import Dashboard from './Components/Dashboard.tsx';
import { IToDoItem } from './Components/types.ts';
import ToDoItem from './Components/todo-item.tsx';
import ToDoList from './Components/todo-list.tsx';
function App() {
  const [todos, setTodos] = useState<IToDoItem[]>([]);

  const handelNewItem = (item: IToDoItem) => {
    setTodos([...todos, item]);
  };

  const handleTaskToggle=(e: React.ChangeEvent<HTMLInputElement>)=> {
  const itemId=e.target.dataset["itemId"];
  const newTodos =todos.map(item => {
    if(item.id ===Number(itemId)){
    return{...item,isDone:!item.isDone}
  }
    return item;
    setTodos(newTodos);
  });

  const handelDelete=(index:number)=>{
    setTodos([...todos.slice(0,index),...todos.slice(index+1,todos.length)]);
  }
  return (
    <div>
      <h1>ToDo App {new Date().toDateString()}</h1>
      <AddForm onSubmit={handelNewItem} />
      <Dashboard items={todos} />
      
      {todos.map((todo) => (
        <ToDoList items={todos}onToggle={handleTaskToggle} onDelete={handelDelete}/>
      ))}
    </div>
  );
}
}
export default App;
