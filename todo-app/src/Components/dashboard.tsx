import React from 'react';
import './dashboard.css';
import { IToDoItem } from './types';

interface IProps{
    items:IToDoItem[];
}
const Dashboard = (props:IProps) => {
    const urgentCounts=props.items.filter(item =>item.isUrgent).length;
    const completedCounts=props.items.filter(item =>item.isDone).length;

    return (
        <div className="dashboard-wrapper">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="stats-container">
                <div className="stat-card">
                    <b className="stat-number">{props.items.length}</b>
                    <span className="stat-label">Created Tasks</span>
                </div>
                <div className="stat-card">
                    <b className="stat-number">{completedCounts}</b>
                    <span className="stat-label">Completed Tasks</span>
                </div>
                <div className="stat-card">
                    <b className="stat-number">{urgentCounts}</b>
                    <span className="stat-label">Urgent Tasks</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
