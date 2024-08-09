import React, { useState } from 'react';

const Item = () => {
    const [tasks,setTasks]=useState([
        {
            id:1,
            title:'운동하기',
            status:'active'
        },
        {
            id:2,
            title:'코딩공부',
            status:'active'
        },
    ])
const addTaskHandler=(todo)=>{
    setTasks([...tasks,todo])
}  
    return (
        <div>
            <ul>
                {tasks.map((task)=>
                <li key={task.id}>
                    {task.title}
                </li>)}
            </ul>
        </div>
    );
};

export default Item;