import React, { useState } from 'react';
import AddForm from './Components/AddForm.tsx';
import Dashboard from './Components/dashboard.tsx';
import { IToDoItem } from './Components/types.ts';
import TodoList from './Components/todo-list.tsx';
function App() {
  const [todos, setTodos] = useState<IToDoItem[]>([]);

  const handelNewItem = (item: IToDoItem) => {
    setTodos([...todos, item]);
  };
  const handleTaskToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemId = e.target.dataset["itemId"];
    setTodos(
      todos.map(item =>
        item.id === Number(itemId) ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  
  

  const handelDelete=(index:number)=>{
    setTodos([...todos.slice(0,index),...todos.slice(index+1,todos.length)]);
  }
  return (
    <div>
      <h1>ToDo App -{new Date().toDateString()}</h1>
      <AddForm onSubmit={handelNewItem} />
      <Dashboard items={todos} />
      
      <TodoList items={todos} onToggle={handleTaskToggle} onDelete={handelDelete} />
    </div>
  );
}

export default App;
