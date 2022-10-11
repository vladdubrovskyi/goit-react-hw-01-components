import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  gap: 20px;
  padding: 20px;
`;
const Avatar = styled.img``;
const Name = styled.p``;
const StatusIsOnline = styled.span`
  > svg {
    color: green;
  }
`;
const StatusIsOffline = styled.span`
  > svg {
    color: red;
  }
`;
export { Item, Avatar, Name, StatusIsOnline, StatusIsOffline };
