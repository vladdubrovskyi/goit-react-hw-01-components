import {ProfileBox, UserDescriptionBox, UserDescriptionText, UserLocationText, StatsBox } from "./Profile.styled"
import PropTypes from 'prop-types';

export const Profile = (props) => {
  return (
   <ProfileBox>
  <UserDescriptionBox>
    <img
      src={props.userAvatar} 
      alt="User avatar"
      className="avatar"
    />
    <UserDescriptionText>{props.userName}</UserDescriptionText>
    <UserDescriptionText>{props.userTag}</UserDescriptionText>
    <UserLocationText>{props.userLocation}</UserLocationText>
  </UserDescriptionBox>

  <StatsBox>
    <li>
      <span>Followers </span>
      <span>{props.userStats.followers}</span>
    </li>
    <li>
      <span>Views </span>
      <span>{ props.userStats.views}</span>
    </li>
    <li>
      <span>Likes </span>
    <span>{props.userStats.likes }</span>
    </li>
  </StatsBox>
</ProfileBox>
  );
};

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    userTag: PropTypes.string.isRequired,
    userLocation: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    userStats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
    }),
  }
