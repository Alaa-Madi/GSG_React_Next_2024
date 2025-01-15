import React from 'react';
import ToDoItem from './todo-item.tsx';
import './toDoList.css';
import { IToDoItem } from './types';

interface IProps {
    items: IToDoItem[];
    onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDelete: (index: number) => void;
}
const ToDoList = (props: IProps) => {
    return (
        <div className="list-wrapper">
            {
             props.items.map((item, index) => (
                <ToDoItem
                    key={item.id}
                    data={item}
                    onToggle={props.onToggle}
                    onDelete={() => props.onDelete(index)}
                />
             ))
            }
        </div>
    )
}

export default ToDoList;
