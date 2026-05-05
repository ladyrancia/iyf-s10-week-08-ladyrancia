function UserCard({ user }) {
  return (
    <div className="user-card">
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  );
}

function UserList({ users }) {
  if (users.length === 0) {
    return <p className="empty-message">No users found.</p>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export { UserCard, UserList };
export default UserList;
