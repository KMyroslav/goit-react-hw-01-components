import styles from "./Friends.module.css";
import propTypes from "prop-types";

const Friends = ({ arr }) => {
  return (
    <ul className={`${styles.friendList} list`}>
      {arr
        .sort((el) => (el.isOnline ? -1 : 1))
        .map((el) => {
          const { avatar, name, isOnline, id } = el;
          return (
            <li key={id} className={styles.item}>
              <span
                className={
                  isOnline
                    ? `${styles.status} ${styles.online}`
                    : `${styles.status} ${styles.offline}`
                }
              ></span>
              <img
                className={styles.avatar}
                src={avatar}
                alt={`${name} avatar`}
                width="48"
              />
              <p className={styles.name}>{name}</p>
            </li>
          );
        })}
    </ul>
  );
};

Friends.propTypes = {
  arr: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Friends;
