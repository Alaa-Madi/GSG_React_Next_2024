import React from 'react';
import './addForm.css';
import { IToDoItem } from './types.ts';
interface IProps{
    onSubmit:(item:IToDoItem)=>void;
}
const AddForm = (props:IProps) => {
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title= e.currentTarget["task"].value;
        const isUrgent= e.currentTarget["urgent"].value;
        if (title.length > 3){
            const newTask:IToDoItem ={
            id:Date.now(),
            title,
            isUrgent,
            isDone:false
        }
        }
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="task" 
                placeholder="Enter your task..." 
                className="input-text" 
            />
            <div className="checkbox-group">
                <input 
                    type="checkbox" 
                    name="urgent" 
                    id="urgent" 
                    className="input-checkbox" 
                />
                <label htmlFor="urgent" className="checkbox-label">Urgent</label>
            </div>
            <input 
                type="submit" 
                value="Add Todo" 
                className="submit-button" 
            />
        </form>
    );
};

export default AddForm;
