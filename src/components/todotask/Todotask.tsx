import React from "react";
import { ITask } from "../interface/Interface";
import './Todotask.scss'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const Todotask = ({ task, completeTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button
                onClick={() => {
                    completeTask(task.taskName);
                }}
            >
                X
            </button>
        </div>
    );
};

export default Todotask;