import React, { useState, useEffect } from 'react';
import List from './List';
import Details from './Details';
import './App.css';

const USERS_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(USERS_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      <h1>Список и детали</h1>
      <div className="layout">
        <List
          users={users}
          selectedId={selected?.id}
          onSelect={setSelected}
        />
        <Details info={selected} />
      </div>
    </div>
  );
}

export default App;
