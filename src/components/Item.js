import React, { useState } from 'react';

const Item = () => {
  const [task,setTask]=useState({
    name:'오늘',
    list:[
      {name:'운동하기'},
      {name:'프로젝트 진행하기'}
    ]
  })
    return (
        <div>
        <h1>{task.name}의 할일</h1>
        </div>
    );
};

export default Item;