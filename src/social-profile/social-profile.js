import propTypes from "prop-types";

const SocialProfile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={(name, "avatar")} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
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
