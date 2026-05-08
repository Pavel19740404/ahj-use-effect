import React from 'react';

function List({ users, selectedId, onSelect }) {
  return (
    <div className="list">
      {users.map((user) => (
        <div
          key={user.id}
          className={`list-item ${selectedId === user.id ? 'list-item--active' : ''}`}
          onClick={() => onSelect(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default List;
