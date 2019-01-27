import React, {useState} from 'react';
import ResourceList from "./ResourceList";
import UserList from "./userList";

const App = () => {
  //state = {resource: 'posts'};
  const [resource, setResource] = useState('posts');
  return (
    <div className="ui">

      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}/>
      <div>
        Users:
        <UserList/>
      </div>
    </div>
  );
};

export default App;