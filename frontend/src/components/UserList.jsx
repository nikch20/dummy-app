import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(error => console.error('Failed to fetch users:', error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}