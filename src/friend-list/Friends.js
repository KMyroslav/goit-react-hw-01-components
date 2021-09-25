const Friends = ({ arr }) => {
  return (
    <ul className="friend-list">
      {arr.map((el) => {
        const { avatar, name, isOnline, id } = el;
        return (
          <li key={id} className="item">
            <span
              className={isOnline ? "status online" : "status offline"}
            ></span>
            <img
              className="avatar"
              src={avatar}
              alt={`${name} avatar`}
              width="48"
            />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Friends;
