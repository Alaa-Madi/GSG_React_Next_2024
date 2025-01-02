import { Trash } from '@phosphor-icons/react';
import React from 'react';
import './toDoItem.css';
import { IToDoItem } from './types';

interface IProps {
    data: IToDoItem;
    onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDelete: () => void;
}

const ToDoItem = ({ data, onToggle, onDelete }: IProps) => {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                className="todo-checkbox"
                checked={data.isDone}
                onChange={onToggle}
                data-item-id={data.id}
            />
            <span className="todo-text">{data.title}</span>
            <span className="todo-trash">
                <button className="trash-button" onClick={onDelete}>
                    <Trash size={20} color="#c80404" />
                </button>
            </span>
            <span>is Urgent: {data.isUrgent.toString()}</span>
        </div>
    );
};

export default ToDoItem;
