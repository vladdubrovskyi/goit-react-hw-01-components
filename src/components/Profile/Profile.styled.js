import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 780px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #e6e6e6;
`;

export const UserDescriptionBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  margin-left: auto;
  margin-right: auto;

  .avatar {
    width: 200;
    margin-bottom: 25px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const UserDescriptionText = styled.p`
  font-family: serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: black;
  margin-top: 0px;
  margin-bottom: 10px;
  text-align: center;
`;

export const UserLocationText = styled.p`
  font-family: serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: black;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
`;

export const StatsBox = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
`;
