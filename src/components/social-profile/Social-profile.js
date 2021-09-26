import propTypes from "prop-types";
import styles from "./SocialProfile.module.css";

const SocialProfile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={(name, "avatar")} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={`${styles.stats} list`}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

SocialProfile.propTypes = {
  name: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.objectOf(propTypes.number),
};

export default SocialProfile;
