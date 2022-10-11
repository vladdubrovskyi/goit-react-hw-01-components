import {ProfileBox, UserDescriptionBox, UserDescriptionText, UserLocationText, StatsBox } from "./Profile.styled"
import PropTypes from 'prop-types';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
   <ProfileBox>
  <UserDescriptionBox>
    <img
      src={avatar} 
      alt="User avatar"
      className="avatar"
    />
    <UserDescriptionText>{username}</UserDescriptionText>
    <UserDescriptionText>{tag}</UserDescriptionText>
    <UserLocationText>{location}</UserLocationText>
  </UserDescriptionBox>

  <StatsBox>
    <li>
      <span>Followers </span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views </span>
      <span>{ stats.views}</span>
    </li>
    <li>
      <span>Likes </span>
    <span>{stats.likes }</span>
    </li>
  </StatsBox>
</ProfileBox>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
    }),
  }),
};